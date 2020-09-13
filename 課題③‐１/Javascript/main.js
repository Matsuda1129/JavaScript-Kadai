'use strict';
{
  let not = 0;
  addEventListener("submit", e => {
  // addEventListener("submit", () => {
    e.preventDefault();
    
not++;
document.getElementById("box1");
const ID = document.createElement("div");
ID.textContent = not;

box1.appendChild(ID);


   
  
const message = document.getElementById("message").value; 
const box2 = document.getElementById("box2");
     const comment = document.createElement("div");
     comment.textContent= message;
     
     box2.appendChild(comment);

     
  
     const addButton1= document.createElement("input");
    addButton1.value = "作業中";
    addButton1.type = "button"
    const addButton2= document.createElement("input");
    addButton2.value = "削除";
    addButton2.type = "button"
    
    const box3 = document.getElementById("box3");
    const status = document.createElement("div");
      status.appendChild(addButton1);
      status.appendChild(addButton2);
       box3.appendChild(status);
       

       const todolist = {
         comment: message,
         status1: addButton1,
         status2: addButton2
       }
       
       // todolist.content = message + addButton1 + addButton2
       // console.log(todolist);
       
       
       const list = [];  
       list.push(todolist);
       console.log(list);
      });
      
      
      
  }
    
    
    
    
