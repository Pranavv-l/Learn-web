function calculateCost(){
    const userInput = document.querySelector('.js-userInput').value;
    const resultEl = document.querySelector('.js-result');
    if(userInput<40){
        resultEl.innerText = `Your total cost is: ${Number(userInput) + 10}`;
    }else{
        resultEl.innerText = `Your total cost is: ${userInput}`
    }
    
}
function subscribe(){
    const subBtn = document.querySelector(".js-sub-btn");
    if(subBtn.innerText === 'Subscribe'){
        subBtn.innerText = 'Subscribed!'
    }else{
        subBtn.innerText = 'Subscribe'
    }
}
function start(){
    const btnEl = document.querySelector(".js-startBtn");
    btnEl.innerHTML='loadind'
    setTimeout(function(){btnEl.innerHTML="Finished"},500)
}
let timeId;
function addToCart(){
const textEl = document.querySelector(".js-cartText");
textEl.innerHTML = 'Added to cart';
clearTimeout(timeId)
timeId = setTimeout(function(){textEl.innerHTML = "";},2000)
}

function changeTitle(){
    setInterval(function(){
        if(document.title === 'Learning DOM + Adv Functions')
            {document.title = "(2) Messages";}
        else{document.title='Learning DOM + Adv Functions'}
    },2000);

}

const add = function(){
    console.log(2+3)
}
window.add = add;
