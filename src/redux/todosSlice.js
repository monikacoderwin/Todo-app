import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, task } = action.payload;
      const todoToEdit = state.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.task = task;

      }
    },
    
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    removeTodo: (state, action) => {
      return [];
    },

  },
});

export const { addTodo, editTodo, deleteTodo,removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
