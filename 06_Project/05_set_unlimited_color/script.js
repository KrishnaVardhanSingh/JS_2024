const hex = "123456789ABCDEF"
let colour = "#"

// random colour generation
function pgcolor(colour) {
    for(let i = 0; i < 6; i++){
        colour += hex[Math.floor((Math.random() * 16))] 
    }
    return colour
}


const changeColor = function () {
    document.body.style.backgroundColor = pgcolor(colour)
}


let controlVar
const startChanging = function () {
// check to privent prom multiple clicks
    if(!controlVar){
        controlVar = setInterval(changeColor, 1000)
    }
}


const stopChanging = function () {
    clearInterval(controlVar)
    controlVar = null
}


document.querySelector("#start").addEventListener('click', startChanging)
document.querySelector("#stop").addEventListener('click', stopChanging)


