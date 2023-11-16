import { configureStore } from '@reduxjs/toolkit'
import authSlice from '@/store/auth/auth.slice'
import { userApi } from '@/store/api/user.api'

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware),
  devTools: true
})

export default store
