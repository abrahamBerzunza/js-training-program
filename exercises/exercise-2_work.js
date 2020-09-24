/*
  Implement the following methods into EventEmitter:
  
  subscribe: You'll be subscribed to an event which you want to be notified.

  emit: You'll send messages to subscribers.

  unsubscribe: You won't be notified anymore about messages of an event.

*/

const EventEmitter = (function () {
  const user_list = [];
  let current_user_count = 0;
  
  function add_subscriber_to_list(subscriber){
    user_list.push(subscriber);
  }

  function subscribe(){
    const calls = [];
    let user_id = current_user_count;
    let subscribed = true;
    current_user_count += 1;
    print_properties = function(){
      console.log(calls);
      console.log(user_id);
      console.log(subscribed);
    }
    add_call = function(call){
      calls.push(call);
    }

    return{
      print_properties:print_properties,
      add_call: add_call
    }
  }

  function print_emitter_properties(){
    console.log(user_list);
  }

  function emit(){
    let a = 2;
  }
  return {
    subscribe: subscribe,
    emit: emit,
    print_emitter_properties: print_emitter_properties,
    add_subscriber_to_list: add_subscriber_to_list
  }
})();

module.exports = {
  EventEmitter
};

let subscriber1 = null;
let subscriber2 = null;
let subscriber3 = null;

subscriber1 = EventEmitter.subscribe();
EventEmitter.add_subscriber_to_list(subscriber1);
subscriber2 = EventEmitter.subscribe();
EventEmitter.add_subscriber_to_list(subscriber2);
subscriber3 = EventEmitter.subscribe();
EventEmitter.add_subscriber_to_list(subscriber3);

subscriber3.print_properties();
subscriber3.add_call("emit");
console.log(EventEmitter.print_emitter_properties());

