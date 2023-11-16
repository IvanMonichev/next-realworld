export interface UserInterface {
  email: string
  token: string
  username: string
  bio: string
  image: string
}

export interface UserResponseInterface {
  user: {
    email: string
    token: string
    username: string
    bio: string
    image: string
  }
}

export interface UserRequestRegisterInterface {
  user: {
    email: string
    password: string
    username: string
  }
}

export interface UserRequestLoginInterface {
  user: {
    email: string
    password: string
  }
}
