const img = document.querySelector(".img")
const body = document.querySelector(".body")
let isDragging = false
let offsetY;
let offsetX;

img.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetY = event.clientY - img.offsetTop;
    offsetX = event.clientX - img.offsetLeft;
})
img.addEventListener('dragstart', (event) => {
    event.preventDefault()
})
window.addEventListener('mouseup', () => {
    isDragging = false
    img.style.cursor = 'grab'
})

window.addEventListener('mousemove',(event) => {
    if(isDragging){
       img.style.left =`${event.clientX - offsetX}px`
       img.style.top =`${event.clientY - offsetY}px`
       img.style.cursor = 'grabbing'
    }
})