'use client'
import type { ChangeEventHandler, FC, FormEventHandler } from 'react'
import ButtonPrimary from '@/components/ui/button-primary/button-primary'
import { useRegisterMutation } from '@/store/api/user.api'
import { useState } from 'react'
import { UserRequestRegisterInterface } from '@/types/user.interface'
import BackendErrors from '@/components/common/backend-errors/backend-errors'

const initialFormData: UserRequestRegisterInterface = {
  user: {
    email: '',
    password: '',
    username: ''
  }
}

const RegisterForm: FC = () => {
  const [formData, setFormData] = useState<UserRequestRegisterInterface>(initialFormData)
  const [register, { isLoading, error }] = useRegisterMutation()

  const handleUpdateFormData: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const name = evt.target.name as keyof UserRequestRegisterInterface['user']
    const value = evt.target.value
    const result = { ...formData.user, [name]: value }
    setFormData({ user: result })
  }

  const handeSubmitForm: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault()
    register(formData)
  }

  console.log(error)

  return (
    <>
      {/*<BackendErrors backendErrors={error} />*/}
      <form onSubmit={handeSubmitForm}>
        <fieldset className='form-group'>
          <input className='form-control form-control-lg' type='text' placeholder='Username' name='username'
                 onChange={handleUpdateFormData} />
        </fieldset>
        <fieldset className='form-group'>
          <input className='form-control form-control-lg' type='text' placeholder='Email' name='email'
                 onChange={handleUpdateFormData} />
        </fieldset>
        <fieldset className='form-group'>
          <input className='form-control form-control-lg' type='password' placeholder='Password' name='password'
                 onChange={handleUpdateFormData} />
        </fieldset>
        <ButtonPrimary type='submit' disabled={isLoading}>Sign Up</ButtonPrimary>
      </form>
    </>
  )
}

export default RegisterForm
