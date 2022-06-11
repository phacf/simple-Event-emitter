export const EventEmitter = {
    events: new Map(),
  
    listen: (event, callBack) => {
  
      const oldEvents = EventEmitter.events.get(event)
  
      if (EventEmitter.events.has(event)) {
        return EventEmitter.events.set(event, [...oldEvents, callBack])
      }
  
      return EventEmitter.events.set(event, [callBack])
    },
  
    emit: (event, data) => {
  
      const myLysteners = EventEmitter.events.get(topic);
  
      if(Array.isArray(myLysteners) && myLysteners.length){
          myLysteners.forEach(event => event(data))
      }
    }
  }


  EventEmitter.listen('save.user',(data)=>{
    console.log(data, 'salvooou')
})
  