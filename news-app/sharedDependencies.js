const pkgJson = require('./package.json');

function sharedDependencies() {
  //PUT HERE libs that you don't want to share with other apps inside federation
  const notShareable = [
    'react-i18next',
    'i18next',
    'i18next-browser-languagedetector',
    'i18next-scanner',
  ];
  //PUT HERE libs that require a strict version
  const strictVersion = [];
  //PUT HERE libs that must have a single version on the federation system
  const singleton = [
    'react',
    'react-dom',
    'react-app-polyfill',
    '@types/react',
    '@types/react-dom',
  ];
  const sharedDeps = {};
  Object.keys(pkgJson.dependencies).forEach(key => {
    if (notShareable.indexOf(key) === -1) {
      sharedDeps[key] = {
        eager: true,
        singleton: singleton.indexOf(key) > -1,
        requiredVersion:
          strictVersion.indexOf(key) > -1 ? pkgJson.dependencies[key] : false,
        strictVersion: strictVersion.indexOf(key) > -1,
      };
    }
  });
  return sharedDeps;
}

module.exports = sharedDependencies;
