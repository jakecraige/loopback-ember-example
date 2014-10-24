var path = require('path');
var pkg = require('./package.json');
var fs = require('fs');
var browserify = require('browserify');
var boot = require('loopback-boot');

module.exports = function buildBrowserBundle(env, callback) {
  var isDevEnv = ~['debug', 'development', 'test'].indexOf(env);
  var b = browserify({
    basedir: __dirname ,
    debug: isDevEnv
  });
  b.require('./' + pkg.main, { expose: 'lbclient' });

  try {
    boot.compileToBrowserify({
      appRootDir: __dirname,
      env: env
    }, b);
  } catch(err) {
    return callback(err);
  }

  var bundlePath = path.resolve(__dirname, 'bundle', 'browser.bundle.js');
  var out = fs.createWriteStream(bundlePath);

  b.bundle()
    .on('error', callback)
    .pipe(out);

  out.on('error', callback);
  out.on('close', callback);
};
