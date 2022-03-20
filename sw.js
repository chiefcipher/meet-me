//INSTALL SERVICE WORKER 
self.addEventListener('install' , evt=> { 
    console.log('service worker has beeen installed' , evt)

})


//ACTIVATE SERVICE WORKER 
self.addEventListener('activate' , evt => { 
    console.log('service worker has been activated' , evt )
})



//FETCH EVENT 
self.addEventListener('fetch' , evt =>  { 
    console.log('fetch event for all types of files ' , evt )
})

