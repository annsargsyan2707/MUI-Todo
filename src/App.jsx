import { useState } from "react";

import React from "react";
import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";
import FilterTodo from "./FilterTodo.jsx";
import ShowUncompleted from "./ShowUncompleted";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Լearn the basics of MUI",
      completed: true,
    },
    {
      id: 2,
      title: "Repeat react hooks",
      completed: false,
    },
  ]);
  const [inputFilter, setInputFilter] = useState("");
  const [completedFilter, setCompletedFilter] = useState("all");

  const addTodo = (title) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesTitle = todo.title
      .toLowerCase()
      .includes(inputFilter.toLowerCase());
    const matchesCompletion =
      completedFilter === "all" ||
      (completedFilter === "completed" && todo.completed) ||
      (completedFilter === "not completed" && !todo.completed);

    return matchesTitle && matchesCompletion;
  });

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newValue) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newValue } : todo
      )
    );
    console.log(todos);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "800px",
      }}
    >
      <CssBaseline />
      <Container
        borderRadius={16}
        maxWidth="lg"
        style={{
          background: "#f0f0f0",
          padding: "20px",
          width: "80%",
          borderRadius: "4px",
        }}
      >
        <ShowUncompleted setCompletedFilter={setCompletedFilter} />
        <FilterTodo inputFilter={inputFilter} setInputFilter={setInputFilter} />
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          handleEdit={handleEdit}
        />
      </Container>
    </div>
  );
};

export default App;
