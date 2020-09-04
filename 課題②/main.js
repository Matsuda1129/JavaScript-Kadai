'use strict';
{
 document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();

    const Fizz =  parseFloat(document.myform.Fizz.value)
    const Buzz =  parseFloat(document.myform.Buzz.value)
    
    parseInt()
    const result = [];
        
    if(Number.isInteger(Fizz) && Number.isInteger(Buzz)){
      for (let i = 1; i <= 99; i++) {
        if ((i % Fizz) == 0&& (i % Buzz) == 0){
       result.push(`FizzBuzz ${i}`);
        }else if((i % Fizz) == 0){
       result.push(`Fizz ${i}`);
        }else if ((i % Buzz) == 0){
       result.push(`Buzz ${i}`);
       document.getElementById('output').innerHTML = result.join('<br>');
        }
      }
    } else{
      document.getElementById('output').innerHTML = "整数値を入力してください";
    }
  });
}