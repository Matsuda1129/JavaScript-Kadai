'use strict'

 const showTask = () => {
  console.log("==========================");
  console.log("現在持っているのタスク一覧");
  console.log("==========================");
}

const task = {
  content: "机を片付ける",
  genre: "掃除",
}
const task1 = {
  content: "牛乳を買う",
  genre: "買い物",
}
const task2 = {
  content: "散歩する",
  genre: "運動",
}

const tasks = [task, task1, task2,]

showTask();

tasks.forEach((task, index,) => {
  console.log(`${index}:[内容]${task.content}、[ジャンル]${task.genre}`);
});

let addCon = prompt("タスクを入力をしてください");

let addGen = prompt("ジャンルを入力してください")

alert("新しいタスクを追加しました。")

const task3 = {
  content: addCon,
  genre: addGen
}

tasks.push(task3);

showTask();

tasks.forEach((task, index,) => {
  console.log(`${index}:[内容]${task.content}、[ジャンル]${task.genre}`);
});

 prompt("確認,追加,削除,終了の４つのいずれかを入力してください")