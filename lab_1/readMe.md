1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?
### setImmediate() is to schedule the immediate execution of callback after I/O events callbacks and before setTimeout and setInterval .
### setTimeout() is to schedule execution of a one-time callback after delay milliseconds.

2. Explain the difference between process.nextTick and setImmediate?
timers -> IO -> poll -> check ->close -> timers -> ...
=> process.nextTick, which puts its callback at the front of the event queue. It will execute after the code currently being executed but before any I/O events or timers or check queue.
=> setImmediate, which is callback that is placed in the check queue of the next cycle of the event loop.

3. Name 10 global modules/methods available in Node environment.
global.events                
global.fs
global.http                  
global.https     
global.module                       
global.parseFloat
global.parseInt             
global.path         
global.require               
global.setImmediate          
global.setInterval
global.setTimeout

