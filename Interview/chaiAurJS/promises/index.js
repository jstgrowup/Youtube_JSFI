const promise1=new Promise(function(resolve,reject){
    // do an async task
    // DB calls , cryptography,network

    setTimeout(() => {
      console.log('async task is complete');
      resolve()    
    }, 1000);
})
promise1.then(function(){
    console.log("promise consumed");
})