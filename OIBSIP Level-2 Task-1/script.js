const buttonsElement = document.querySelectorAll("button")
const inputElement = document.getElementById("result")
for(let i=0;i<buttonsElement.length;i++){
    buttonsElement[i].addEventListener("click",()=>{
        const buttonsValue= buttonsElement[i].textContent
        if(buttonsValue==='AC'){
            clearResult()
        }
        else if(buttonsValue==='DEL'){
            del()
           }
        else if(buttonsValue==='='){
            calculateResult()
        }
        else{
            appendvalue(buttonsValue)
        }
    })
}
function clearResult(){
    inputElement.value=""
}
function calculateResult(){
    inputElement.value=eval(inputElement.value)
}
function appendvalue(buttonsValue){
    inputElement.value+=buttonsValue
}
function del(){
    inputElement.value = inputElement.value.slice(0, -1);
}