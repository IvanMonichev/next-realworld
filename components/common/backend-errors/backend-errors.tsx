import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { BackendErrorsInterface } from '@/types/backend-error.interface'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

type BackendErrorsProps = {
  backendErrors: any
};

const BackendErrors: FC<BackendErrorsProps> = ({ backendErrors }) => {
  const [errorMessages, setErrorMessages] = useState<string[]>([])
  useEffect(() => {
    const errors = backendErrors.data.errors
    const result = Object.keys(errors).map((name: string) => {
      const messages = errors[name].join(', ')
      return `${name}: ${messages}`
    })
    setErrorMessages(result)
  }, [backendErrors])

  return (
    <ul className='error-messages'>
      {errorMessages.map((errorMessage, index) => (
        <li key={index}>{errorMessage}</li>)
      )}
    </ul>
  )
}

export default BackendErrors
