/*
  Implement the following methods into EventEmitter:
  
  subscribe: You'll be subscribed to an event which you want to be notified.

  emit: You'll send messages to subscribers.

  unsubscribe: You won't be notified anymore about messages of an event.

*/


let subscriber = class{
  constructor(user_id){
    this.calls = [];
    this.user_id = user_id
    this.suscribed = true;
  }
}

const EventEmitter = (function () {
  var user_count = -1;
  const user_list = [];

  subscribe = function(){
    user_count += 1;
    new_sus = new subscriber(user_count);
    user_list.push(new_sus);
  }


  emit = (call) =>{
    for(let i = 0;i< user_list.length;i++){
      user = user_list[i];
      if(user.suscribed){
        user.calls.push(call);
      }
    }
  }

  unsuscribe = (user_id) =>{
    for(let i = 0;i< user_list.length;i++){
      user = user_list[i];
      if(user.user_id == user_id){
        user.suscribed = false;
        user_list.splice[i];
      }
    }
  }

  print_user_list = function(){
    console.log(user_list);
  }

  return{
    subscribe: subscribe,
    emit:emit,
    unsuscribe:unsuscribe,
    print_user_list:print_user_list,
  }


})();

module.exports = {
  EventEmitter
};

EventEmitter.subscribe();
EventEmitter.subscribe();
EventEmitter.subscribe();
EventEmitter.emit("All aboard");
EventEmitter.unsuscribe(1);
EventEmitter.emit("All aboard_2");
EventEmitter.print_user_list();