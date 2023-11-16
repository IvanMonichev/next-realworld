import { StatusAuthorization } from '@/lib/constants'
import { UserInterface, UserResponseInterface } from '@/types/user.interface'

export interface AuthStateInterface {
  isLoggedIn: StatusAuthorization
  currentUser: UserResponseInterface | null
}
