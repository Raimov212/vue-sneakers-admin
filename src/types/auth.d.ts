export interface User {
  email: string
  password?: string
  fullName?: string
}

export interface UserType {
  user: User
}

export interface ReturnUserData {
  user: User
  errors: Array<string>
  snackbarError?: boolean
  snackbarSuccess?: boolean
}
