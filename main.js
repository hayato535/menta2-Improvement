'use strict'


  
  document.getElementById('button').addEventListener('click',()=>{
    const fizz = document.getElementById('fizz');
    const buzz = document.getElementById('buzz');
    let div = document.getElementById('output-area');

    div.textContent = "";

    if(Number.isInteger(Number(fizz.value)) === false || Number.isInteger(Number(buzz.value)) === false || fizz.value ==='' || buzz.value === ''){
      const p = document.createElement('p');
      p.textContent = '整数値を入力してください';
      div.appendChild(p);

    }else{
      for(let i=1; i<100; i++){
        const p = document.createElement('p');
        if(i%fizz.value === 0 && i%buzz.value === 0){
          p.textContent = `FizzBuzz${i}`;
          div.appendChild(p);
        }else if(i%fizz.value === 0){
          p.textContent = `Fizz${i}`;
          div.appendChild(p);
        }else if(i%buzz.value === 0){
          p.textContent = `Buzz${i}`;
          div.appendChild(p);
        }
      }
    }
  });