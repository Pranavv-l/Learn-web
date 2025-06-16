const body = document.querySelector(".body");
const trail = document.querySelector(".main-div");
window.addEventListener('mousemove',(event) => {
    
    trail.style.left = `${event.clientX}px`
    trail.style.top = `${event.clientY}px`

})