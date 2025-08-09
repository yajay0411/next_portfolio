module.exports = {
  hooks: {
    readPackage(pkg) {
      const trustedBuilds = ['core-js'];

      if (trustedBuilds.includes(pkg.name)) {
        pkg.scripts = pkg.scripts || {};
      }

      return pkg;
    },
  },
};
