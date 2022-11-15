const firstNum = document.querySelector(".first-num")
const secondNum = document.querySelector(".second-num")
const choises = Array.from(document.querySelector(".choises").children)
const errorMsg = document.querySelector(".error-msg")
const answer = document.querySelector(".answer")
const playAgain = document.querySelector(".play-again")




function calc(event) {
    // Reset
    answer.style.display = "block"
    playAgain.classList.add("hide")
    errorMsg.style.opacity = 0
    

    firstNum.innerHTML = Math.floor(Math.random() * 10)+ 1
    secondNum.innerHTML = Math.floor(Math.random() * 10)+ 1

    let correct = Math.floor(Math.random() * 6)
    choises.forEach((choise)=>{
        choise.addEventListener("click", result)
    
        if (choise === choises[correct]) {
            choise.innerHTML = firstNum.innerHTML * secondNum.innerHTML
        } else { 
            choise.innerHTML = Math.floor(Math.random() * 100)+ 1
        }
    })
}


function result(event) {
    let result = firstNum.innerHTML * secondNum.innerHTML

    if (event.target.innerHTML == result) {
        // Acertei
        answer.style.display = "none"
        playAgain.classList.remove("hide")
        errorMsg.style.opacity = 1
        errorMsg.innerHTML = "Correto!"
        errorMsg.style.color = "dodgerblue"
    } else{
        // Errei
        errorMsg.style.opacity = 1
        errorMsg.innerHTML = "Errado!"
        errorMsg.style.color = "brown"
    }
}

playAgain.addEventListener("click", calc)
calc()