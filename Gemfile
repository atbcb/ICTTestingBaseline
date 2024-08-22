source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "4.2.2" # pinned awaiting release of https://github.com/jekyll/jekyll/pull/9304
gem "execjs", "2.7.0" # https://github.com/rails/execjs/issues/99
gem "autoprefixer-rails"
gem "webrick" # not included in jekyll directly until 4.3.0 https://github.com/jekyll/jekyll/pull/8524

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem 'jekyll-redirect-from'
  gem 'jekyll-sitemap'
  gem 'jekyll-seo-tag'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

gem "html-proofer", "~> 5"
gem "kramdown-parser-gfm"

gem "csv", "~> 3.3"

gem "base64", "~> 0.2.0"

gem "bigdecimal", "~> 3.1"
