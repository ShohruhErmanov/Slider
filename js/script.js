let elImg = [...document.querySelectorAll('.img')]
let btnNext = document.querySelector('.btn')
let btnPrev = document.querySelector('.btn2')

let x = 0;
let i = 0;
let stop;



btnNext.addEventListener('click', () => {
    elImg[i].style.display = 'none'
    i++;
    if (i >= elImg.length) {
        i = 0;
    }
    elImg[i].style.display = 'block'
})

btnPrev.addEventListener('click', () => {
    elImg[i].style.display = 'none'

    i--;
   if (i < 0) {
     i = 3;
   }
   elImg[i].style.display = 'block'

})



function elImgTime(){

    
  stop =  setTimeout(() => {
        elImgTime()
        elImg[i].style.display = 'none'
        i++;
        if (i >= elImg.length) {
            i = 0;
        }
        elImg[i].style.display = 'block'
      
    
        
    }, 3000);
}
elImgTime()

elImg[0].addEventListener('mouseover', () => {
    clearInterval(stop)
  })
  elImg[1].addEventListener('mouseover', () => {
    clearInterval(stop)
  })
  elImg[2].addEventListener('mouseover', () => {
    clearInterval(stop)
  })
  elImg[3].addEventListener('mouseover', () => {
    clearInterval(stop)
  })

  elImg[0].addEventListener('mouseout', () => {
    elImgTime()
  })
  elImg[1].addEventListener('mouseout', () => {
    elImgTime()
  })
  elImg[2].addEventListener('mouseout', () => {
    elImgTime()
  })
  elImg[3].addEventListener('mouseout', () => {
    elImgTime()
  })
  