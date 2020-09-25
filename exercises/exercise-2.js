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
  		return {
  			unsubscribe: function() {
		  		users.forEach((user, index) => {
		  			if(user === subscriber) {
		  				users.splice(index, 1);
		  			}
		  		});
		  	}
  		}
  	},
  	emit: function(message) {
  		users.forEach(user => {
  			user(message);
  		});
  	}
  };
})();

module.exports = {
  EventEmitter
};
