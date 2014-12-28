Package.describe({
  name: 'lookback:tooltips',
  summary: 'Reactive tooltips.',
  version: '0.1.0',
  git: 'https://github.com/lookback/meteor-tooltips.git'
})

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0')
  api.use('coffeescript jquery templating deps'.split(' '), 'client')

  api.add_files('tooltips.html tooltips.coffee'.split(' '), 'client')
})