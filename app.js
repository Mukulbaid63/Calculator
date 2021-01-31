
var calculator = document.querySelector('.calculator')
var input =calculator.querySelector("#input");
var keys = calculator.querySelector('.calculator__keys')
var body=document.querySelector("body")
var button=keys.querySelectorAll("button")
var darkmode=document.querySelector("#darkmode")
var modebutton=true;
function modehandler(){
  if(modebutton){
  body.setAttribute("style","background-color:#dedede;")
  calculator.setAttribute("style","background-color:#c2c2c2;box-shadow:20px 20px 60px #a5a5a5,  -20px -20px 60px #dfdfdf;")
  for(let i=0;i<button.length;i++){button[i].classList.add("daycol")}
  input.setAttribute("style","background-color:#f0f0f0;color:black;")
  darkmode.innerHTML=`<i class="fas fa-moon"></i>`
    modebutton=false;
}
else{
  body.setAttribute("style","background-color:#303030;")
  calculator.setAttribute("style","background-color:#171717;box-shadow:20px 20px 60px #212020, -20px -20px 60px #2d2c2c;")
  for(let i=0;i<button.length;i++){button[i].classList.remove("daycol")}
  input.setAttribute("style","background-color:#1c1c1c;color:white;")
  darkmode.innerHTML=`<i class="fas fa-sun"></i>`
    modebutton=true;
    

}

}
keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    var key = e.target
var action = key.dataset.action
var keyContent = key.textContent
var displayedNum = input.value
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

  input.value = displayedNum + keyContent

  }

  if (action === 'dot') {
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
