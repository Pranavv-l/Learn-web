const dataArray=[];
let totalHtml ="";

function addData(){
    const userInput = document.querySelector('.js-input');
    const divElement = document.querySelector('.js-div')
    const userInputText = userInput.value;
    dataArray.push(userInputText);
    addHtmlData();
    divElement.innerHTML = totalHtml 
    userInput.value = ""
    totalHtml=""
} 
function addHtmlData(){
    for(let i = 0;i<dataArray.length;i++){
        let htmlData = `<p>${dataArray[i]}<p/>`;
        totalHtml += htmlData;
    }
}
