import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div className="flex flex-row justify-between items-center w-72 my-2 bg-gray-200 p-2 rounded-lg">
            <p className="text-lg font-semibold">{todo.text}</p>
            <button
              className="bg-red-500 text-white font-semibold rounded p-1"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
