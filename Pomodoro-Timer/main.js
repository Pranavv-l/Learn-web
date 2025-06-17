const timer = document.querySelector('.timer')
const startBtn = document.querySelector('.start-btn')
let time = 1500;
let id,min,sec;
startBtn.addEventListener('click', () => {
    if(startBtn.innerHTML === 'Start'){
        id = setInterval(() => {
            if(time != 0){
                time--
                min = Math.floor(time/60)
                sec = time % 60
                timer.innerHTML = `${min}:`+`${sec}`.padStart(2,'0')
                startBtn.innerHTML = 'Stop'
            }else{
                timer.innerHTML = `Done!`
                clearInterval(id)
            }       
        },1000)
    }else{
        clearInterval(id)
        startBtn.innerHTML = 'Start'
    }
   
})