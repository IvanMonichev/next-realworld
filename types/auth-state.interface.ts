import { StatusAuthorization } from '@/lib/constants'
import { UserInterface } from '@/types/user.interface'

export interface AuthStateInterface {
  isLoggedIn: StatusAuthorization
  currentUser: UserInterface | null
}
