import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input) return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        className="bg-gray-600 p-2 rounded-md text-white placeholder:text-white font-semibold outline-none"
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white font-medium py-2 px-4 ml-2 rounded-md"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddToDo;
