const startBtn = document.querySelector('.start-btn')
const blurOv = document.querySelector('.blur-wrapper')
const body = document.querySelector('.item-spawn-area')
const pointContainer = document.querySelector('.points-container')
const pointRender = document.querySelector('.point-score')
const timeRender = document.querySelector('.time-render')

let pointId,timerId,bombId,time=15;

startBtn.addEventListener(('click'),() => {
    blurOv.classList.remove('blur-overlay')
    playGame()
})
function playGame(){
    clearInterval(timerId);
    clearInterval(pointId);
    clearInterval(bombId)
    const vpWidth = body.clientWidth;
    const vpHeight = body.clientHeight;
    startBtn.style.display = 'none'
    pointContainer.style.display = 'none'

    let userPoints = 0;
    time = 15;
    pointRender.innerHTML = `Point: ${userPoints}`
    body.innerHTML = ''
    timer()
    spawnPoints()
    spawnBombs()
    function spawnPoints() {
        let randDelay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000
        const point = document.createElement('div');
        point.classList.add('main-point')
        point.style.left = `${Math.floor(Math.random() * (vpWidth+1))}px`
        point.style.top = `${Math.floor(Math.random() * (vpHeight+1))}px`
        gotPoint(point)
        body.appendChild(point)
        pointId = setTimeout(()=>spawnPoints(),randDelay)
    }
    function spawnBombs() {
        let randDelay = Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000
        const bomb = document.createElement('div');
        bomb.classList.add('main-bomb')
        bomb.style.left = `${Math.floor(Math.random() * (vpWidth+1))}px`
        bomb.style.top = `${Math.floor(Math.random() * (vpHeight+1))}px`
        gotBomb(bomb)
        body.appendChild(bomb)
        bombId = setTimeout(()=>spawnBombs(),randDelay)
    }
    function gotPoint(point){
        point.addEventListener(('click'), () => {
            userPoints++
            pointRender.innerHTML = `Point: ${userPoints}`
            body.removeChild(point)
        })
    }
    function gotBomb(bomb){
        bomb.addEventListener('click',() => {
            gameOver()
        })
    }
    function timer(){
        timerId = setInterval(() =>{
            time--
            timeRender.innerHTML = `${time}`
            if(time <= 0){
                gameOver()
            }
        },1000)
    }
    function gameOver() {
        clearInterval(timerId)
        clearInterval(pointId)
        clearInterval(bombId)
        blurOv.classList.add('blur-overlay')
        startBtn.style.display = 'inline-block'
        startBtn.innerHTML = `Try again?`
        pointContainer.style.display = 'block'


    }
}
