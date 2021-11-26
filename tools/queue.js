const {queue} = require('async');

var chatQueue = queue(function(task, callback) {
  task.then((output) => {
    callback(output);
  })
}, 1);

module.exports = chatQueue;