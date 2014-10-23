module.exports = function(Todo) {
  Todo.greet = function(msg, cb) {
    cb(null, 'Greeting.. ', msg);
  }

  Todo.remoteMethod('greet', {
    accepts: {arg: 'msg', type: 'string'},
    returns: {arg: 'greeting', type: 'string'}
  });
};
