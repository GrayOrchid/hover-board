let $cont = document.querySelector('.cont')
let squares = 500

for (let i = 0; i < squares; i++) {
let $square = document.createElement('div')
// console.log($square);
$square.classList.add('square')

$cont.appendChild($square)


}