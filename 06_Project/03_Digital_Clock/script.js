const clock = document.querySelector("clock")

// use setInterval( function (){}, ms) to change interval on every given interval

setInterval(function(){
    let date = new Date()

    clock.innerHTML = date.toLocaleTimeString()

}, 1000)