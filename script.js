let totalSeconds = 28800

let timerElement = document.getElementById("timer")
let startBtn = document.getElementById("start")
let pauseBtn = document.getElementById("pause")
let resetBtn = document.getElementById("reset")

let timerInterval = null

function updateTimer(){

let hours = Math.floor(totalSeconds / 3600)
let minutes = Math.floor((totalSeconds % 3600) / 60)
let seconds = totalSeconds % 60

if(hours < 10){
hours = "0" + hours
}

if(minutes < 10){
minutes = "0" + minutes
}

if(seconds < 10){
seconds = "0" + seconds
}

let timeText = hours + ":" + minutes + ":" + seconds

timerElement.innerText = timeText
}

function startTimer(){

if(timerInterval != null){
return
}

timerInterval = setInterval(function(){

if(totalSeconds > 0){
totalSeconds = totalSeconds - 1
updateTimer()
}

},1000)

}

function pauseTimer(){

clearInterval(timerInterval)
timerInterval = null

}

function resetTimer(){

clearInterval(timerInterval)
timerInterval = null
totalSeconds = 28800
updateTimer()

}

startBtn.onclick = startTimer
pauseBtn.onclick = pauseTimer
resetBtn.onclick = resetTimer

updateTimer()