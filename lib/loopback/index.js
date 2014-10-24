var path = require('path');

module.exports = {
  name: "loopback",
  treeForVendor: function(tree) {
    var lbPath = path.join(__dirname, '..', '..', 'api', 'client',
                           'lbclient', 'bundle');

    var lbTree = this.pickFiles(lbPath, {
      srcDir: '/',
      files: ['browser.bundle.js'],
      destDir: '/loopback'
    });

    return this.mergeTrees([tree, lbTree]);
  },

  included: function(app) {
    this.app = app;

    app.import('vendor/loopback/browser.bundle.js');
  }
};
