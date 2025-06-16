const body = document.querySelector(".body");
let id;
window.addEventListener('mousemove',(event) => {
    const dot = document.createElement('div');
    dot.classList.add('main-div');
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    body.appendChild(dot);
    requestAnimationFrame(() => {
        dot.style.opacity = '0';
    })
    setTimeout(() => body.removeChild(dot),200)
})
