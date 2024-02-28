const buttons = document.querySelectorAll(".btn")
const main = document.querySelector(".main")

buttons.forEach( function(buttons) {
    buttons.addEventListener('click', function(e) {
        if(e.target.id === "one"){
            main.style.backgroundColor = "#F5DD61"
        }
        if(e.target.id === "two"){
            main.style.backgroundColor = "#59D5E0"
        }
        if(e.target.id === "three"){
            main.style.backgroundColor = "#535C91"
        }
        if(e.target.id === "four"){
            main.style.backgroundColor = "#C68484"
        }
    } )
} )