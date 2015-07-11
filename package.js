Package.describe(
{
  name: 'didstopia:supportkit',
  summary: 'Provides easy access to SupportKit.',
  version: '0.0.4',
  git: 'https://github.com/Didstopia/meteor-supportkit.git',
  documentation: 'README.md'
});

Npm.depends(
{
  'supportkit': '0.2.12'
});

Package.onUse(function(api)
{
  api.versionsFrom('1.1.0.2');
  api.addFiles('supportkit.js', 'client');
  api.export('SupportKit', 'client');
});

Package.onTest(function(api)
{
  api.use(['tinytest', 'didstopia:supportkit']);
  api.addFiles('supportkit-tests.js', 'client');
  api.export('SupporKit', 'client');
});
