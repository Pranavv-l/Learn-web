const btn = document.querySelector(".btn")
const box = document.querySelectorAll('.box')
const ids = new Map();
let running = false;
btn.addEventListener('click',() => {
    if(running){
        ids.forEach((id) => cancelAnimationFrame(id));
        console.log(ids)
        ids.clear
        running = false  
    }else{
        box.forEach((el) => {
            animateBox(el)
        })
        running = true
    }
})
function animateBox(box){
    let direction = 1;
    const max = Math.floor(Math.random() * (199 - 31 + 1)) + 31
    let current = Math.floor(Math.random() * (max - 31 + 1)) + 31
    function animate() {
        current += direction;
        if (current >= max || current <= 30) direction *= -1;
        box.style.height = `${current}px`;
        const id = requestAnimationFrame(animate);
        ids.set(box,id);
    }
    animate()
}