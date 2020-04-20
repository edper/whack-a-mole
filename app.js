const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
  square.forEach(classname=> {
    classname.classList.remove('mole')
    classname.classList.remove('moleWhack')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')
  hitPosition = randomPosition.id

}

square.forEach(id=>{
  id.addEventListener('mouseup', ()=>{
     if (id.id === hitPosition) {
        let hitId = square[hitPosition-1]
        let audio = new Audio('woodHit.mp3')
        hitId.classList.remove('mole')
        hitId.classList.add('moleWhack')
        audio.play()
        result = result + 1
        score.textContent = result
     }
  })
})

moveMole()

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 1000)
}

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
  if (currentTime==0) {
    clearInterval(timerId)
    alert("GAME OVER! Your final score is " + result)
  }

}

let timerId = setInterval(countDown, 1000)
