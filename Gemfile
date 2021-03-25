ruby '>= 2.6.6'

source "https://rubygems.org"

gem "jekyll", "~> 3.9"

# See https://github.com/envygeeks/jekyll-assets/issues/622
gem "sprockets", "~> 3.7"
gem "kramdown-parser-gfm", "~> 1.1.0"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem 'jekyll-redirect-from'
  gem 'jekyll-paginate-v2', "3.0.0"  
  gem 'jekyll-sitemap'
  gem 'jekyll-seo-tag'
  gem "jekyll-assets", "~> 3.0", group: :jekyll_plugins
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

gem "html-proofer", "~> 3.18"
