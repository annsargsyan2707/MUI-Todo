import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, toggleComplete, removeTodo, handleEdit }) => {
  const todoJSX = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      title={todo.title}
      completed={todo.completed}
      toggleComplete={toggleComplete}
      removeTodo={removeTodo}
      handleEdit={handleEdit}
    />
  ));
  return <ul>{todoJSX} </ul>;
};

export default TodoList;
