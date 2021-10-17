'use strict';

{
  const btn =document.getElementById('btn1');

  btn1.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'き';
    } else if (n < 0.67){
      btn.textContent = 'し';
    } else {
      btn.textContent = 'ち';
    }
  });
}

{
  const btn =document.getElementById('btn4');

  btn4.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'き';
    } else if (n < 0.67){
      btn.textContent = 'し';
    } else {
      btn.textContent = 'ち';
    }
  });
}

{
  const btn =document.getElementById('btn6');

  btn6.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'き';
    } else if (n < 0.67){
      btn.textContent = 'し';
    } else {
      btn.textContent = 'ち';
    }
  });
}

let fish = document.getElementById('fish');
document.body.addEventListener('keydown',
    event => {
        if (event.key === 'o' && event.ctrlKey) {
          fish.style.display = 'block'
        }
    });

let maru = document.getElementById('maru');
document.body.addEventListener('keydown',
    event => {
        if (event.key === 'k' && event.ctrlKey) {
          maru.style.display = 'block'
        }
    });

let maru2 = document.getElementById('maru2');
document.body.addEventListener('keydown',
    event => {
        if (event.key === 'm' && event.ctrlKey) {
          maru2.style.display = 'block'
        }
    });
