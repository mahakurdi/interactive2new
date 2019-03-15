

let dad = document.querySelector('.square');
let kid = document.querySelector('.dot1');
let mom = document.querySelector('.dot');
let firstGame = document.querySelector('.firstGame');
let secondGame = document.querySelector('#SecondGame');

dad.addEventListener('mousedown',function(){
  isDadDown = true

})

mom.addEventListener('mousedown',function(){
  isMomDown = true

})

kid.addEventListener('mousedown',function(){
  isKidDown = true

})

document.addEventListener('mousemove',function(event){
  let littleLess = 100
  if(isDadDown){
    
    dad.style.left = event.clientX - littleLess + "px"
    dad.style.top = event.clientY - littleLess + "px"

    kid.style.left = event.clientX - 300 + "px"
    kid.style.top = event.clientY + "px"

    mom.style.top = window.innerHeight - event.clientY + "px"
    mom.style.left = window.innerWidth - event.clientX + "px"
  }
  
  if(isMomDown){
    mom.style.left = event.clientX - littleLess + "px"
    mom.style.top = event.clientY - littleLess + "px"
    kid.style.left = event.clientX - 300 + "px"
    kid.style.top = event.clientY + "px"

    dad.style.top = event.clientY + "px"
    dad.style.left = window.innerWidth - event.clientX + "px"

  }

  if(isKidDown){
    kid.style.left = event.clientX - littleLess + "px"
    kid.style.top = event.clientY - littleLess + "px"
    dad.style.left = event.clientX - 300 + "px"
    dad.style.top = event.clientY + "px"



    if(event.clientX > window.innerWidth - 50){
      if(event.clientY < 50){
        document.body.style.background = 'Beige'
        isKidDown = false

firstGame.style.display = "none";
secondGame.style.display = "block";

      }


    }


  }
})

document.addEventListener('mouseup',function(){
  isDadDown = false
  isMomDown = false
  isKidDown = false
})

let isDadDown = false
let isMomDown = false
let isKidDown = false

dragElement(document.getElementById("square1"));
dragElement(document.getElementById("square2"));
dragElement(document.getElementById("square3"));
dragElement(document.getElementById("circle1"));
dragElement(document.getElementById("circle2"));
dragElement(document.getElementById("circle3"));
dragElement(document.getElementById("traingular1"));
dragElement(document.getElementById("traingular2"));
dragElement(document.getElementById("traingular3"));
dragElement(document.getElementById("rectangular1"));
dragElement(document.getElementById("rectangular2"));
dragElement(document.getElementById("rectangular3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


