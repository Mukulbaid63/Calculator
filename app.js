
var calculator = document.querySelector('.calculator')
var input =calculator.querySelector("#input");
var keys = calculator.querySelector('.calculator__keys')
var body=document.querySelector("body")
var button=keys.querySelectorAll("button")
var darkmode=document.querySelector("#darkmode")
var modebutton=true;
function backspacehandler(){
  let displayedNum = input.value
  console.log(displayedNum)
  let len=displayedNum.length
  console.log(len)

  if (displayedNum === '0')  {
    input.value="0";
  }
  else{
    input.value=displayedNum.substring(0,len-1)
  }
}
function modehandler(){
  if(modebutton){

  body.setAttribute("style","background-color:#dedede;")
  calculator.setAttribute("style","background-color:#c2c2c2;box-shadow:20px 20px 60px #a5a5a5,  -20px -20px 60px #dfdfdf;")
  for(let i=0;i<button.length;i++){button[i].classList.add("daycol")}
  input.setAttribute("style","background-color:#f0f0f0;color:black;")
  darkmode.innerHTML=`<i class="fas fa-moon"></i>`
    modebutton=false;
    input.value="0"
}
else{
  body.setAttribute("style","background-color:#303030;")
  calculator.setAttribute("style","background-color:#171717;box-shadow:20px 20px 60px #212020, -20px -20px 60px #2d2c2c;")
  for(let i=0;i<button.length;i++){button[i].classList.remove("daycol")}
  input.setAttribute("style","background-color:#1c1c1c;color:white;")
  darkmode.innerHTML=`<i class="fas fa-sun"></i>`
    modebutton=true;
    
input.value="0"
}

}
keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    var key = e.target
var action = key.dataset.action
var keyContent = key.textContent
let displayedNum = input.value
const KeyType = action
if (!action) {
    if (displayedNum === '0')  {
        input.value = keyContent
      }
      else {
        input.value = displayedNum + keyContent
      }
      }
  if (
    action === 'add' ||
    action === 'minus' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    if(displayedNum.slice(displayedNum.length-1)==='+'||displayedNum.slice(displayedNum.length-1)==='-'||displayedNum.slice(displayedNum.length-1)==='/'||displayedNum.slice(displayedNum.length-1)==='*')
    {
      input.value=displayedNum.substring(0,displayedNum.length-1)+keyContent
    }

    else
  input.value = displayedNum + keyContent


  }

  if (action === 'dot') {
    if(displayedNum.slice(displayedNum.length-1)==='.')
    {
      input.value=displayedNum.substring(0,displayedNum.length-1)+keyContent
    }

    else
        input.value = displayedNum + '.'
      }
  
  if (action === 'clr') {
    input.value="0"
  }
  
  if (action === 'ans') {
   let y=eval(displayedNum);
   
   input.value=y }
 }
})
