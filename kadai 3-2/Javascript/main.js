'use strict';
{

  const list = [];

  addEventListener("submit", e => {

    e.preventDefault();
    const todo = document.getElementById("message").value;
    list.push(todo);
    showTodo();
  });
  const showTodo = () => {
    const container = document.getElementById("container");

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

    list.forEach((todo, index) => {
      const tr = document.createElement("tr");
      container.appendChild(tr);
      const th1 = document.createElement("th");
      const th2 = document.createElement("th");
      th1.textContent = `${index}`;
      th2.textContent = `${todo}`;
      tr.appendChild(th1);
      tr.appendChild(th2);

      const addButton1 = document.createElement("input");
      addButton1.value = "作業中";
      addButton1.type = "button"

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

      console.log(list);

    });
    const deleteTodo = index => {
      list.splice(index, 1);
      showTodo();
    };
  }
}