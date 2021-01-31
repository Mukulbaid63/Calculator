
var calculator = document.querySelector('.calculator')
var input =calculator.querySelector("#input");
var keys = calculator.querySelector('.calculator__keys')

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
   let ya=eval(displayedNum);
    let y=ya.toPrecision(11)
   input.value=y }
 }
})
