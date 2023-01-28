const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.list');

let todos = [];
let todoId = 0;

const setTodos = (newTodos) => {
  todos = newTodos;
}

const getAllTodos = () => {
  return todos;
}

const appendTodos = (text) => {
  const newTodoId = todoId++
  const newTodos = getAllTodos().concat({id: newTodoId, content: text})
  // const newTodos = [...getAllTodos(), {id: newTodoId, content: text}]
  
  setTodos(newTodos)

  createNewTodos();
}

//TODO: 삭제버튼 함수 작성
const delTodo = (todoId) => {
  const newTodos = getAllTodos().filter(todo => todo.id !== todoId)
  setTodos(newTodos)
  
  createNewTodos();
}

const createNewTodos = () => {
  todoList.innerHTML = null;
  const allTodos = getAllTodos()

  allTodos.forEach(todo => {
    const todoItem = document.createElement('li')
    todoItem.className = 'todo-item'

    const todoContent = document.createElement('div')
    todoContent.className = 'todo'
    todoContent.textContent = todo.content

    const buttonBox = document.createElement('div')
    buttonBox.className = 'button-box'

    const delBtn =document.createElement('button')
    delBtn.className = 'del-button'
    //TODO: 삭제버튼 이벤트 실행
    delBtn.addEventListener('click', () => {
      delTodo(todo.id)
    })
    const modiBtn =document.createElement('button')
    modiBtn.className = 'modify-button'
    const compleBtn =document.createElement('button')
    compleBtn.className = 'complete-button'
    
    buttonBox.appendChild(delBtn)
    buttonBox.appendChild(modiBtn)
    buttonBox.appendChild(compleBtn)
    
    todoItem.appendChild(todoContent)
    todoItem.appendChild(buttonBox)
    
    todoList.appendChild(todoItem)
  })
}

const init = () => {
  todoInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && e.target.value){
      appendTodos(e.target.value);
      todoInput.value = '';
    }
  })

  const clickBtn = document.querySelector('.create-button')
  clickBtn.addEventListener('click', () => {
    if(todoInput.value){
      appendTodos(todoInput.value);
      todoInput.value = '';
    }
  })
}

export { init } ;