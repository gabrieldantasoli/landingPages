var bars = document.querySelector('#bars') ;
bars.addEventListener('click',change)
document.querySelector('#close').addEventListener('click',change) ;

function change(){
    document.querySelector('.clock').classList.toggle('active')
} ;