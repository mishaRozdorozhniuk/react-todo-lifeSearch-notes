import React from 'react';
import { Todo } from '../Todos/Todo';
import './TodoList.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const PostList = ({editTodos, deleeTodo, todos}) => {
    return (
      <div>
        <TransitionGroup>
          {todos.length ? todos.map((todo, index) => 
            <CSSTransition classNames="item" key={index} timeout={500} >
                    <Todo
                      index={index}
                      todo={todo}
                      deletedTodos={deleeTodo}
                      editTodos={editTodos}
                    />
              </CSSTransition>
            ) : <span>Постов больше нет</span>}
          </TransitionGroup>
      </div>

    )
}