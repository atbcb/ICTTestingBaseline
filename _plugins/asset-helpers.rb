require 'fileutils'

module AssetHelper
    def self.process(site, payload)
        return if @processed
        FileUtils.cp_r('node_modules/uswds/dist/js/', 'assets/', verbose: true)
        FileUtils.cp_r('node_modules/uswds/dist/img/', 'assets/uswds/', verbose: true)
        FileUtils.cp_r('node_modules/uswds/dist/fonts/', 'assets/uswds/', verbose: true)
        FileUtils.cp_r('node_modules/jquery/dist/', 'assets/jquery/', verbose: true)
        FileUtils.cp_r('node_modules/swiper/', 'assets/swiper/', verbose: true)
        FileUtils.cp_r('node_modules/video.js/dist/', 'assets/video-js/', verbose: true)
        FileUtils.cp_r('node_modules/stickyfilljs/dist/', 'assets/stickyfilljs/', verbose: true)
        FileUtils.cp_r('node_modules/videojs-youtube/dist/', 'assets/youtube-video-js/', verbose: true)
        FileUtils.cp_r('node_modules/@fortawesome/fontawesome-free/', 'assets/fontawesome-free/', verbose: true)
        FileUtils.cp_r('node_modules/jquery-toast-plugin/dist/', 'assets/jquery-toast-plugin/', verbose: true)
        FileUtils.cp_r('node_modules/dompurify/dist/', 'assets/dompurify/', verbose: true)
        @processed = true
    end
end

Jekyll::Hooks.register :site, :after_reset do |site, payload|
    AssetHelper.process(site, payload)
end