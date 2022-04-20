import React, {useState} from 'react';
import './App.css'
import { TodoForm } from './components/TodoForm/TodoForm';
import { EditModal } from './components/EditModal/EditModal';
import { PostList } from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([{ text: "Learn about React"}, { text: "e about React"}]);
  const [showModal, setShowModal] = useState(false)
  const [valueModal, setValueModal] = useState("");
  const [oldValueModal, setOldValueModal] = useState("");

  const addTodo = value => {
    const newTodos = [...todos, { text: value }];
    setTodos(newTodos);
    console.log(todos);
  };

  const replaceTodo = value => {
    const newTodos = [...todos]
    const oldVal = oldValueModal.text.text
    newTodos.map((todo) => {
      if(todo.text === oldVal) {
        todo.text = value;
      }
    })
    setTodos(newTodos);
  }

  const deleeTodo = index => {
    const newTodo = [...todos]
    newTodo.splice(index, 1)
    setTodos(newTodo);

  }

  const editTodos = (index) => {
    setShowModal(!showModal)
    todos.map((todo, indexToDo) => {
      if (indexToDo === index) {
        setOldValueModal({text: todo})
      }
    })
  }

  return (
    <div className="App">
      <div className="app-inner">
        <section>
          {showModal && <EditModal 
                          setValueModal={setValueModal} 
                          valueModal={valueModal}
                          oldValueModal={oldValueModal}
                          replaceTodo={replaceTodo}
                          setShowModal={setShowModal} />}
          <TodoForm addTodo={addTodo}/>
          <PostList 
            deleeTodo={deleeTodo} 
            editTodos={editTodos}
            todos={todos} />
          </section>
        </div>
    </div>
  );
}

export default App;