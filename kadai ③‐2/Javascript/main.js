'use strict';
{

  const list = [];
  
  addEventListener("submit", e => {

    e.preventDefault();

    const message = document.getElementById("message").value;
    const box2 = document.getElementById("box2");
    const comment = document.createElement("div");



    const addButton1 = document.createElement("input");
    addButton1.value = "作業中";
    addButton1.type = "button"
    addButton1.classList.add('workingbtn');

    const addButton2 = document.createElement("input");
    addButton2.value = "削除";
    addButton2.type = "button"
    addButton2.classList.add('deletebtn');

    const box3 = document.getElementById("box3");
    const status = document.createElement("div");




    const todolist = {

      comment: message,
      status1: addButton1,
      status2: addButton2
    }

    comment.classList.add('task');

    const box1 = document.getElementById("box1");
    const ID = document.createElement("div");

    comment.textContent = todolist.comment
    box2.appendChild(comment);

    status.appendChild(todolist.status1);
    status.appendChild(todolist.status2);
    box3.appendChild(status);
    
    list.push(todolist);
    
    
    console.log(list);
    
    list.forEach((todolist, index,) => {
      ID.textContent = (`${index}`);
      box1.appendChild(ID);
    });
    let deletebtns = document.querySelectorAll('.deletebtn');
    let workingbtns = document.querySelectorAll('.workingbtn');
    let tasks = document.querySelectorAll('.task');
    // let IDnumbers = document.querySelectorAll('.IDnumber');
    
    for(let i = 0; i < workingbtns.length; i++){
     workingbtns[i].addEventListener('click', function () {
      if  (this.value === "作業中"){
        // this.classList.remove('finishing');
       this.value = "完了";
      }else{
        // this.classList.add('finishing')
       this.value = "作業中";
      }  
      })
    }

    for(let i = 0; i < deletebtns.length; i++){
    deletebtns[i].addEventListener('click', function () {
        this.remove()
        workingbtns[i].remove()
        tasks[i].remove()
        // IDnumbers[i].remove()
      list.splice(i, 1)
      ID.classList.add('IDnumber');
      while(box1.firstChild){
        box1.removeChild(box1.firstChild);
      };
      const IDtitle = document.createElement("div");
      IDtitle.textContent = "ID";
      box1.appendChild(IDtitle);       
    });
  }
    // list.forEach((todolist, index,) => {
    //   ID.textContent = (`${index}`);
    //   box1.appendChild(ID);
    //   ID.classList.add('IDnumber');
    //   deletebtns[index].addEventListener('click', function () {
    //     this.remove()
    //     workingbtns[index].remove()
    //     tasks[index].remove()
    //     // IDnumbers[index].remove()
    //     // list.shift()
    //     list.splice(index, 1)
    //     console.log(index);
    //     console.log(list);
    //     while (box1.firstChild) {
    //       box1.removeChild(box1.firstChild);
    //     };
    //     const IDtitle = document.createElement("div");
    //     IDtitle.textContent = "ID";
    //     box1.appendChild(IDtitle);
    //     list.forEach((todolist, index,) => {
    //       ID.textContent = (`${index}`);
    //       box1.appendChild(ID);
    //       ID.classList.add('IDnumber');
    //     });
    //     // list.forEach((todolist, index,) => {
    //     //   ID.textContent = (`${index}`);
    //     //   box1.appendChild(ID);
    //     // });
    //   });
    // });

    
  });
}