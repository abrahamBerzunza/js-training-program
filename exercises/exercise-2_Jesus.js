/*
  Implement the following methods into EventEmitter:
  
  subscribe: You'll be subscribed to an event which you want to be notified.

  emit: You'll send messages to subscribers.

  unsubscribe: You won't be notified anymore about messages of an event.

*/

const EventEmitter = (function () {
  let subscribers = [];
  return {
    subscribe: function(fn){
      subscribers.push(fn);
    
      return{
        unsubscribe: function(){
          subscribers.forEach((user,index) =>{
            if(user === fn){
              subscribers.splice(index,1);
            }
          })
        }
      }

    },

    emit: function(msg){
      subscribers.forEach(subscriber => {
        subscriber(msg);
      })
    }
  }
})();

module.exports = {
  EventEmitter
};
