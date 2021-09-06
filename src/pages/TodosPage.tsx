import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import shortid from 'shortid';
interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

const getInitialTodoState = () => {
  const savedTodos = localStorage.getItem('todosTS');

  return savedTodos ? JSON.parse(savedTodos) : [];
};

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(getInitialTodoState);

  useEffect(() => {
    localStorage.setItem('todosTS', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text: string) => {
    const newTodo: ITodo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const toggleCompletedHandler = (todoId: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <>
      <TodoForm onSubmit={addTodoHandler} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodoHandler}
        onToggleCompleted={toggleCompletedHandler}
      />
    </>
  );
};

export default TodosPage;
