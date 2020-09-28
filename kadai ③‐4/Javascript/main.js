'use strict';
{

  const list = [];
// リストの追加
  addEventListener("submit", e => {
    e.preventDefault();
    const message = document.getElementById("message").value;
    list.push({
      content: message,
      state: '作業中'
    });
    deleteall();
    title();
    showTodo();
  });

// 要素の全削除　関数
  const deleteall = () => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  // ID　コメント　完了　の作成
  const title = () => {
    const container = document.getElementById("container");
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
  }

  const showTodo = () => {
    message.value = "";
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
    });

    // 作成ボタンの関数
    const deleteTodo = index => {
      list.splice(index, 1);
      deleteall();
      title();
      showTodo();
    };

    // 作業中・完了のボタン関数
    const workingTodo = index => {
      if (list[index].state == "作業中") {
        list[index].state = "完了";
      } else {
        list[index].state = "作業中";
      }
      deleteall();
      title();
      showTodo();
    }

    // ラジオボタン各種の動き
    const all = document.getElementById("all");
    all.addEventListener("click", event => {
      deleteall();
      title();
      showTodo();
    });

    const working = document.getElementById("working");
    working.addEventListener("click", event => {
      const workings = list.filter(item => item.state === '作業中')
      deleteall();
      title();
      workings.forEach((content, index) => {
        const tr = document.createElement("tr");
        container.appendChild(tr);
        const th1 = document.createElement("th");
        const th2 = document.createElement("th");
        th1.textContent = `${index}`;
        th2.textContent = `${workings[index].content}`;
        tr.appendChild(th1);
        tr.appendChild(th2);

        const addButton1 = document.createElement("input");
        addButton1.value = workings[index].state;
        addButton1.type = "button"

        const addButton2 = document.createElement("input");
        addButton2.value = "削除";
        addButton2.type = "button"

        const th3 = document.createElement("th");
        tr.appendChild(th3);
        th3.appendChild(addButton1);
        th3.appendChild(addButton2);
      });
    });

    const finished = document.getElementById("finished");
    finished.addEventListener("click", event => {
      deleteall();
      title();
      showTodo();
    });
  }
}

