/*
  Implement the following methods into EventEmitter:
  
  subscribe: You'll be subscribed to an event which you want to be notified.

  emit: You'll send messages to subscribers.

  unsubscribe: You won't be notified anymore about messages of an event.

*/

const EventEmitter = (function () {
  let subscribers = [];
  return {
    subscribe: function (sub) {
      subscribers.push(sub);
      return {
        unsubscribe: function () {
          subscribers = subscribers.filter(unsub => unsub !== sub);
        },
      };
    },
    emit: function (message) {
      subscribers.forEach(sub => sub(message));
    },
  };
})();

module.exports = {
  EventEmitter,
};
