'use strict';
{

  const list = [];

  addEventListener("submit", e => {
    e.preventDefault();
    const message = document.getElementById("message").value;
    list.push({
      content: message,
      state: '作業中'
    },);
    showTodo();
  });
  
  const showTodo = () => {
    const container = document.getElementById("container");
    message.value = "";
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const tr = document.createElement("tr");
    container.appendChild(tr);

    const thID = document.createElement("th");
    const thcomment = document.createElement("th");
    const thstatus = document.createElement("th");
    thID.textContent = "ID";
    thcomment.textContent = "コメント";
    thstatus.textContent = "状態";
    tr.appendChild(thID);
    tr.appendChild(thcomment);
    tr.appendChild(thstatus);

    list.forEach((content, index) => {
      const tr = document.createElement("tr");
      container.appendChild(tr);
      const th1 = document.createElement("th");
      const th2 = document.createElement("th");
      th1.textContent = `${index}`;
      th2.textContent = `${list[index].content}`;
      tr.appendChild(th1);
      tr.appendChild(th2);

      const addButton1 = document.createElement("input");
      addButton1.value = list[index].state;
      addButton1.type = "button"
      // addButton1.classList.add("working");

      const addButton2 = document.createElement("input");
      addButton2.value = "削除";
      addButton2.type = "button"

      const th3 = document.createElement("th");
      tr.appendChild(th3);
      th3.appendChild(addButton1);
      th3.appendChild(addButton2);

      addButton2.addEventListener("click", event => {
        deleteTodo(index);
      });

      addButton1.addEventListener("click", event => {
        workingTodo(index);
      });
     

      console.log(list);

    });
   
    const deleteTodo = index => {
      list.splice(index, 1);
      showTodo();
    };

    const workingTodo = index =>{
        if( list[index].state == "作業中"){
          // addButton1[i].classList.remove("addButton1");
          // addButton1[i].classList.add("finished");
          list[index].state = "完了";
          // list.splice(index, 1, "完了");
        }else{
          // addButton1[i].classList.remove("finished");
          // addButton1[i].classList.add("addButton1");
          list[index].state = "作業中";
          // list.splice(index, 1, "作業中");
        }
        showTodo();
      }
  }
}