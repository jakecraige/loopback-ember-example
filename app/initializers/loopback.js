export function initialize(/* container, application */) {
  var client = (function() {
    /*global requrie:true*/
    return require('lbclient');
  })();
  window.client = client;
  window.log = function() {
    console.log.apply(console, arguments);
  };
  window.Todo = client.models.Todo;
  window.LocalTodo = client.models.LocalTodo;
};

export default {
  name: 'loopback',
  initialize: initialize
};
