require "autoprefixer-rails"

# adapted from https://github.com/vwochnik/jekyll-autoprefixer
module Autoprefixer
    class Autoprefixer
        attr_reader :site, :batch

        def initialize(site)
            @site = site
            @batch = Array.new
        end

        def process()
            options = @site.config['autoprefixer'] || {}
            @batch.each do |item|
                path = item.destination(@site.dest)
                File.open(path, 'r+') do |file|
                    content = file.read
                    file.truncate(0)
                    file.rewind
                    file.write(AutoprefixerRails.process(content, options))
                end
            end

            @batch.clear
        end
    end
end

module Jekyll
    class Site
        attr_accessor :autoprefixer
    end
end

Jekyll::Hooks.register :site, :after_reset do |site|
    # create new autoprefixer instance
    site.autoprefixer = Autoprefixer::Autoprefixer.new(site)
end

Jekyll::Hooks.register :site, :post_render do |site|
    site.each_site_file do |item|
        if site.regenerator.regenerate?(item)
            ext = File.extname(item.destination(site.dest))
            site.autoprefixer.batch.push(item) if ext == ".css"
        end
    end
end

Jekyll::Hooks.register :site, :post_write do |site|
    site.autoprefixer.process
end