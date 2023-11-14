import { AuthStateInterface } from '@/types/auth-state.interface'
import { StatusAuthorization } from '@/lib/constants'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: AuthStateInterface = {
  isLoggedIn: StatusAuthorization.Unknown,
  currentUser: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<StatusAuthorization>): void {
      state.isLoggedIn = action.payload
    }
  }
})

export const { setIsLoggedIn } = authSlice.actions
export default authSlice
