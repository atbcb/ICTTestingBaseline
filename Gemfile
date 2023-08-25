source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.0"
gem "execjs", "2.7.0" # https://github.com/rails/execjs/issues/99
gem "autoprefixer-rails"

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem 'jekyll-include-cache'
  gem "jekyll-feed", "~> 0.6"
  gem 'jekyll-redirect-from'
  gem 'jekyll-paginate-v2', "~> 3.0"
  gem 'jekyll-sitemap'
  gem 'jekyll-seo-tag'
  gem 'jekyll-assets', git: "https://github.com/envygeeks/jekyll-assets"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

gem "html-proofer", "~> 3.15"
gem "kramdown-parser-gfm"
