let image = document.querySelector('#bigImage')



window.addEventListener('mousemove',zoomer)



function zoomer(event){
  let x = event.clientX / window.innerWidth
  let y = event.clientY / window.innerHeight

  if(x > 1){
    x = 1
  } else if(x < 0){
    x = 0
  }

  if(y > 1){
    y = 1
  } else if(y < 0){
    y = 0
  }
  
  let imageHeight = image.clientHeight
  let imageWidth = image.clientWidth
  
  
  image.style.top = -y * (imageHeight - window.innerHeight) + 'px'
  image.style.left = -x * (imageWidth - window.innerWidth) + 'px'
  
  
  
  console.log(x,y,x*imageWidth,y*imageHeight)
}


window.addEventListener('mousedown',(e)=>{

  image.style.display = 'block'
  zoomer(e)
})
window.addEventListener('mouseup',()=>{
  image.style.display = 'none'
})