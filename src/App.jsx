import React, { useState } from 'react';
import { TodoForm } from './components/TodoForm/TodoForm';
import { EditModal } from './components/EditModal/EditModal';
import { PostList } from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Шкільний альбом' },
    { text: 'Альбом музикальний' },
    { text: 'Альбом з фотографіями' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [valueModal, setValueModal] = useState('');
  const [oldValueModal, setOldValueModal] = useState('');
  const [flag, setActiveFlag] = useState(false);

  const addTodo = (value) => {
    const newTodos = [...todos, { text: value }];
    setTodos(newTodos);
  };

  const handleActive = (index) => {
    const newTodos = [...todos];
    newTodos.map((todo, i) => {
      todo.className = '';

      if (i === index) {
        setActiveFlag(!flag);
        todo.className = 'active-todo-bg';
      } else if (i === index && flag === false) {
        setActiveFlag(false);
        todo.className = '';
      }
    });
    setTodos(newTodos);
  };

  const replaceTodo = (value) => {
    const newTodos = [...todos];
    const oldVal = oldValueModal.text.text;
    newTodos.map((todo) => {
      if (todo.text === oldVal) {
        todo.text = value;
      }
    });
    setTodos(newTodos);
  };

  const deleeTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  const editTodos = (index) => {
    setShowModal(!showModal);
    todos.map((todo, indexToDo) => {
      if (indexToDo === index) {
        setOldValueModal({ text: todo });
      }
    });
  };

  return (
    <div className="App">
      <div className="app-inner">
        <section>
          {showModal && (
            <EditModal
              setValueModal={setValueModal}
              valueModal={valueModal}
              oldValueModal={oldValueModal}
              replaceTodo={replaceTodo}
              setShowModal={setShowModal}
            />
          )}
          <TodoForm addTodo={addTodo} />
          <PostList
            flag={flag}
            handleActive={handleActive}
            deleeTodo={deleeTodo}
            editTodos={editTodos}
            todos={todos}
          />
        </section>
      </div>
      <span className="count-of-todos">Count of Todos: {todos.length}</span>
    </div>
  );
}

export default App;
