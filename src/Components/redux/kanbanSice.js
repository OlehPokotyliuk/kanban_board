import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo: [],
  progress:[],
  hold:[],
  complete:[],
  dropDownValue : {},
}

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    getFormValue: (state, action)=>{
      state.todo = [...state.todo, action.payload];
    },
    getDropDownValue:(state,action)=>{
      const {id, from,  to, text} = action.payload;
      if (state[to]) {
        const newText = state[from].filter((elem, ind) => id !== ind); 
        return {
          ...state,
          [from]: newText, 
          [to]: [...state[to], text], 
        };
      }
    },
    deleteItem(state, action){
      const {id, from} = action.payload;
      const newText = state[from].filter((elem, ind) => id !== ind); 
      return {
        ...state,
        [from]: newText,
      } 
    }
  },
})


export const { getFormValue, getDropDownValue, deleteItem } = kanbanSlice.actions

export default kanbanSlice.reducer