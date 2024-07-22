import { createSlice, nanoid } from "@reduxjs/toolkit";

// defines the initial state
const initialState = {
  todos: [{ id: 1, text: "Hello" }],
};

// creates a slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// exports individual reducers (used in dispatch)
export const { addTodo, removeTodo } = todoSlice.actions;

// exports reducer object as a whole (used in store)
export default todoSlice.reducer;
