let $cont = document.querySelector('.cont')
let squares = 401
let $reset = document.querySelector('.reset')


let colors = ['#E5F0FF','#5BFF62','#580BE4','#FE2F57','#F464FE','#00848C']
for (let i = 0; i < squares; i++) {


let $square = document.createElement('div')

$square.classList.add('square')

$cont.appendChild($square)



$square.addEventListener('mousemove',()=>{
 for (let i = 0; i < colors.length; i++) {
    let random =  Math.floor(Math.random() * i);
      $square.style.background = colors[random]
 $square.style.boxShadow = `0 0 20px ${colors[random]}`
 $square.style.transform= 'rotate(360deg)'

 }
 
})

$reset.addEventListener('click',()=>{
    $square.style.background = '#1d1d1d'
   $square.style.boxShadow = `0 0 2px black`
})




}
