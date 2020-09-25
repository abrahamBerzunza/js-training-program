/*
  Implement the following methods into EventEmitter:
  
  subscribe: You'll be subscribed to an event which you want to be notified.

  emit: You'll send messages to subscribers.

  unsubscribe: You won't be notified anymore about messages of an event.

*/

const EventEmitter = (function () {
  let subscribers = [];
  return {
    subscribe: function (name) {
      subscribers.push(name);
      return {
        unsubscribe: function () {
          subscribers = subscribers.filter((suscriber) => suscriber !== name);
        },
      };
    },
    emit: function (message) {
      subscribers.forEach((subscriber) => subscriber(message));
    },
  };
})();

module.exports = {
  EventEmitter,
};
