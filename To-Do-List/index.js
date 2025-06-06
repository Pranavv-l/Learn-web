const dataArray=[];
const userInput = document.querySelector('.js-textInput');
const divElement = document.querySelector('.js-div');
const dateInput = document.querySelector('.js-dateInput');


function renderData(){
    const userInputText = userInput.value;
    const userInputDate = dateInput.value
    dataArray.push({name:userInputText,dueDate:userInputDate});

    addHtmlData();
} 
function addHtmlData(){
    let totalHtml ="";
    for(let i = 0;i<dataArray.length;i++){
        dataObject = dataArray[i];
        const {name , dueDate} = dataObject;
        let htmlData = `<p>${name} ${dueDate} <button onclick='
        dataArray.splice(${i},1);
        addHtmlData()
        ' class='js-del-btn'>X</button></p>`;
        totalHtml += htmlData;
    }
    divElement.innerHTML = totalHtml 
    userInput.value = ""
}