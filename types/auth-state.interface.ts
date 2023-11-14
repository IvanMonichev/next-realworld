import { StatusAuthorization } from '@/lib/constants'
import { CurrentUserInterface } from '@/types/current-user.interface'

export interface AuthStateInterface {
  isLoggedIn: StatusAuthorization
  currentUser: CurrentUserInterface | null
}
