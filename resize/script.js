window.addEventListener('resize',pageResized)


function pageResized(){
  console.log(window.innerHeight, window.innerWidth)
  
let windowPercentOfScreen = (window.innerHeight / window.screen.height) * 100
  
  let rotation = (window.innerWidth / window.screen.width) * 360
  
  let colorFromScreenHeight = 'hsl(' + rotation + ','+windowPercentOfScreen+'%,66%)'
  document.body.style.background = colorFromScreenHeight
  printout.innerText = 'hsl(' + Math.round(rotation) + ','+Math.round(windowPercentOfScreen)+'%,66%)'
}

pageResized()