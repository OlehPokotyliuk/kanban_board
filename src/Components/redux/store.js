import { configureStore } from '@reduxjs/toolkit'
import kanbanSlice from './kanbanSice'

export const store = configureStore({
  reducer: {
    kanban: kanbanSlice,
  },
})