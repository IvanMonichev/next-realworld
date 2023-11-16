export interface BackendErrorsInterface {
  status: number
  data: {
    errors: {
      [key: string]: string[]
    }
  }
}
