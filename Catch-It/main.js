const startBtn = document.querySelector('.start-btn')
const blurOv = document.querySelector('.blur-wrapper')
const body = document.querySelector('body')
const pointRender = document.querySelector('.point-score')
const timeRender = document.querySelector('.time-render')
const vpWidth = window.innerWidth;
const vpHeight = window.innerHeight;
let gameId,timerId,time=15;

startBtn.addEventListener(('click'),() => {
    blurOv.classList.remove('blur-overlay')
    playGame()
})
function playGame(){
    clearInterval(timerId);
    clearInterval(gameId);
    startBtn.style.display = 'none'
    let userPoints = 0;
    time = 15;
    pointRender.innerHTML = `Points: ${userPoints}`
    timer()
    gameId = setInterval(() => {
        if(time!=0){
            const point = document.createElement('div');
            point.classList.add('main-point')
            point.style.left = `${Math.floor(Math.random() * (vpWidth+1))}px`
            point.style.top = `${Math.floor(Math.random() * (vpHeight+1))}px`
            gotPoint(point)
            body.appendChild(point)
            setTimeout(() => body.removeChild(point),Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000)
        }else{
            clearInterval(timerId)
            clearInterval(gameId)
            blurOv.classList.add('blur-overlay')
            startBtn.style.display = 'inline-block'
        }    
    },Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000)

    function gotPoint(point){
        point.addEventListener(('click'), () => {
            userPoints++
            pointRender.innerHTML = `Points: ${userPoints}`
            body.removeChild(point)
        })
    }
    function timer(){
        timerId = setInterval(() =>{
            time--
            timeRender.innerHTML = `${time}`
        },1000)
    }
}
