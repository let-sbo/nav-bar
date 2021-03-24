const sandwich= document.querySelector('.nav')
const nav= document.getElementById('barnav');
const equis= document.querySelector('.navequis');

sandwich.addEventListener('click',()=>{
    nav.style.top='10vh';
    sandwich.style.display='none';
    equis.style.display='inline-block';
})
   
equis.addEventListener('click',()=>{
    equis.removeAttribute('style');
    nav.removeAttribute('style');
    sandwich.removeAttribute('style');
})
