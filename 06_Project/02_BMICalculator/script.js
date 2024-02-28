const form = document.querySelector("form")
const button = document.querySelector(".button")


form.addEventListener('submit', function(e) {

    e.preventDefault()

    
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#output')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Apunichh Bhagwaan nahi hai bhai, mujhe value chahiye`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Apunichh Bhagwaan nahi hai bhai, mujhe value chahiye`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        if(bmi <18.5){
            result.innerHTML = `Kha le bhai tera BMI ${bmi} hi hai 😒`
        }
        else if(bmi >24.9){
            result.innerHTML = `Kitna thusega bhai tera BMI ${bmi} hai 🫡`
        }
        else{
            result.innerHTML = `${bmi}, Ye bhi theek hai 🙂`
        }
        
    }

})