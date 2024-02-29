const hex = "0123456789ABCDEF"
    let colour = "#"

    const changeClr = function(colour){
        for(let i = 0; i < 6; i++)
        {
            colour += hex[Math.floor(Math.random() * 16)]
        }
        return colour
    }
    
    const start = function (){
        document.body.style.backgroundColor = changeClr(colour)
    }
    
    let initiate
    document.querySelector("#start").addEventListener('click', function(){
        initiate = setInterval(start, 1000)
    })

    document.querySelector('#stop').addEventListener('click', function(){
        clearInterval(initiate)
    })