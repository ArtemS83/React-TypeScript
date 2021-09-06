import React from 'react';
import classNames from 'classnames';

interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

interface ITodoListProps {
  todos: ITodo[];
  onToggleCompleted: (todoId: string) => void;
  //   onDeleteTodo: (todoId: string) => void;
  onDeleteTodo(todoId: string): void;
}
const TodoList: React.FC<ITodoListProps> = ({
  todos,
  onToggleCompleted,
  onDeleteTodo,
}) => {
  return (
    <>
      {todos.length > 0 ? (
        <ul className="TodoList">
          {todos.map(({ id, text, completed }) => (
            <li
              key={id}
              className={classNames('todoItem', {
                completed: completed,
              })}
            >
              <label>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => onToggleCompleted(id)}
                />
                <span>{text}</span>
                <button
                  type="button"
                  className="TodoList__btn"
                  onClick={() => onDeleteTodo(id)}
                >
                  Delete
                </button>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p className="center">No Todos</p>
      )}
    </>
  );
};

export default TodoList;
