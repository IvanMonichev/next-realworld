import { configureStore } from '@reduxjs/toolkit'
import authSlice from '@/store/auth/auth.slice'

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer
  },
  devTools: true
})

export default store
