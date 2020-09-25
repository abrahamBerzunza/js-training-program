/*
  Implement the following methods into EventEmitter:
  
  subscribe: You'll be subscribed to an event which you want to be notified.

  emit: You'll send messages to subscribers.

  unsubscribe: You won't be notified anymore about messages of an event.

*/

const EventEmitter = (function () {
  let users = [];
  return {
  	subscribe: function (subscriber) {
  		users.push(subscriber);
  		return subscriber;
  	},
  	emit: function(message) {
  		return message;
  	},
  	unsubscribe: function(subscriber) {
  		return subscriber;
  	}
  }
})();

module.exports = {
  EventEmitter
};
