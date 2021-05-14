const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
 activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

rightBtn.addEventListener('click', () => {
  activeSlide++
 
   if (activeSlide > slides.length - 1) {
     activeSlide = 0
   }
 
   setBgToBody()
   setActiveSlide()
 })
 
 leftBtn.addEventListener('click', () => {
   activeSlide--
 
   if (activeSlide < 0) {
     activeSlide = slides.length - 1
   }
 
   setBgToBody()
   setActiveSlide()
 })
 
 setBgToBody()
 
 function setBgToBody() {
   body.style.backgroundImage = slides[activeSlide].style.backgroundImage
 }
 
 function setActiveSlide() {
   slides.forEach((slide) => slide.classList.remove('active'))
 function setBgToBody() {
   body.style.backgroundImage = slides[activeSlide].style.backgroundImage
 }
 
 function setActiveSlide() {
   slides.forEach((slide) => slide.classList.remove('active'))
 
   slides[activeSlide].classList.add('active')
 }
 
 }

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}


// ////...jquery...////
// $(document).ready(function(){
// $(document).ready(function(){
//   $("rightBtn").event("click",function(){
//     activeSlide++

//     if (activeSlide > slides.length - 1) {
//       activeSlide = 0
//     }
  
//     setBgToBody()
//     setActiveSlide()
//   })
//   $("leftBtn").event("click",function(){
//     activeSlide--

//   if (activeSlide < 0) {
//     activeSlide = slides.length - 1
//   }

//   setBgToBody()
//   setActiveSlide()
// })
// setBgToBody()
  

// function setBgToBody() {
//   $("body").css.backgroundImage = slides[activeSlide].style.backgroundImage
// }

// function setActiveSlide() {
//   $("slides").forEach((slide) => slide.classList.remove('active'))

//   $("slides[activeSlide]").classList.add('active')
// }
// })

//   if (activeSlide < 0) {
//     activeSlide = slides.length - 1
//   }

//   setBgToBody()
//   setActiveSlide()
// })
// setBgToBody()
  

// function setBgToBody() {
//   $("body").css.backgroundImage = slides[activeSlide].style.backgroundImage
// }

// function setActiveSlide() {
//   $("slides").forEach((slide) => slide.classList.remove('active'))

//   $("slides[activeSlide]").classList.add('active')
// }
// })
