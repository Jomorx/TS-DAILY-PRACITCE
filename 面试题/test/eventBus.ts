class Bus{
    deps:Record<PropertyKey,Function[]>
    constructor(){
        this.deps = {}
    }
    on(eventName:PropertyKey,cb:Function){
        if(!this.deps[eventName]) {
            this.deps[eventName] = []
        }
        this.deps[eventName].push(cb)
    }
    emit(eventName:PropertyKey,...args:any[]){
        this.deps[eventName].forEach((fn)=>{
            fn(...args)
        })
    }
    off(eventName:PropertyKey,cb:Function){
        this.deps[eventName] = this.deps[eventName].filter(fn=>fn !== cb)
        
    }
    once(eventName:PropertyKey,cb:Function){
        const wrapper = (...args:any[])=>{
            cb(...args)
            this.off(eventName,cb)
        }
        this.on(eventName,wrapper)
    }
}





const one = (...args)=>{
    console.log('1',...args)
}
const bus = new Bus()
bus.on('foo',one)

bus.on('foo',(...args)=>{
    console.log('2',...args)
})

bus.emit('foo',1,2,3)
bus.off('foo',one)
bus.emit('foo',1,2,3)

export {}