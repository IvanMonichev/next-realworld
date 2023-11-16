import { AuthStateInterface } from '@/types/auth-state.interface'
import { StatusAuthorization } from '@/lib/constants'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInterface, UserResponseInterface } from '@/types/user.interface'

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
    },
    setCurrentUser(state, action: PayloadAction<UserResponseInterface>): void {
      state.currentUser = action.payload
    }
  }
})

export const { setIsLoggedIn, setCurrentUser } = authSlice.actions
export default authSlice
