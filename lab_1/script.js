/*Write the necessary Node script to make this code work for all arrays: 
[1,2,3,4,5,6,7,8].even(); // [2,4,6,8] [1,2,3,4,5,6,7,8].odd() */

Array.prototype.even= function(){
    return this.filter(ele=> ele%2===0)
}
console.log([1,2,3,4,5,6,7,8].even())

Array.prototype.odd= function(){
    return this.filter(ele=> ele%2!==0)
}
console.log([1,2,3,4,5,6,7,8].odd())



// Fix the slow function to be asynchronous/non-blocking
function slow(callback){ 
    setTimeout(()=>{
        for(let i=0; i<= 5e8; i++){}
    },0)

	if (Math.random() > 0.5) { 	
		return callback("Error",null) 
	} 
	callback(null, {id:12345}) 
} 

function exec(fn){ 
	// Complete the code here to implement chaining with callback
 fn= Math.random()
 return fn;
}

function fn(rand){
    return rand
}
slow(function (data) {
    exec(data, function (data){
            fn(data);        
    }); 
}); 


