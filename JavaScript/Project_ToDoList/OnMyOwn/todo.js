let userInput = prompt("메뉴를 선택하세요!");
const ToDoList = [];

while (userInput !== "quit") {
  if (userInput === "new") {
    // 새 TodoList 등록
    let newTodo = prompt("새로운 Todo 를 입력하세요!");
    ToDoList.push(newTodo);
    console.log(`${newTodo} 를 추가했습니다.`);
  } else if (userInput === "list") {
    console.log("*******************");
    console.log("전체 ToDo 를 조회합니다.");
    for (let i = 0; i < ToDoList.length; i++) {
      console.log(`${i} : ${ToDoList[i]}`);
    }
    console.log("*******************");
  } else if (userInput === "delete") {
    let deleteNum = parseInt(prompt("삭제할 Todo 의 index를 입력하세요"));
    while (!deleteNum || deleteNum >= ToDoList.length) {
      let deleteNum = prompt("삭제할 Todo 의 index를 다시 입력하세요");
    }
    ToDoList.splice(deleteNum, 1);
  } else {
    console.log("유효한 접근이 아닙니다.");
  }
  userInput = prompt("메뉴를 선택하세요!");
}
