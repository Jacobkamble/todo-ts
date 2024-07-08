import { TodoType } from "./../../types/todoTypes";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  todoList: TodoType[];
}

const initialState: InitialStateType = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.todoList.push(payload);
    },
    removeTodo(state, { payload }) {
      state.todoList = state.todoList.filter(({ id }) => {
        return id !== payload;
      });
    },
  },
});

export const { addTodo,removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
