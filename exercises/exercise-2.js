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
      return name;
    },
    emit: function (message) {
      return message;
    },
    unsubscribe: function (name) {
      subscribers.splice(name);
      this.emit();
      return name;
    },
  };
})();

let msg = EventEmitter.subscribe();
msg(subscriber1)

module.exports = {
  EventEmitter,
};