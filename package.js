Package.describe({
  name: 'aldeed:autoform-bs-button-group-input',
  summary: 'A Bootstrap button group theme for the "select-checkbox" and "select-radio" AutoForm input types',
  version: '1.0.2',
  git: 'https://github.com/aldeed/meteor-autoform-bs-button-group-input.git'
});

Package.onUse(function(api) {
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.addFiles([
    'cb-buttons.html',
    'cb-buttons.js',
    'rad-buttons.html',
    'rad-buttons.js',
    'bool-rad-buttons.html',
    'bool-rad-buttons.js'
  ], 'client');
});
