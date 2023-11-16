'use client'
import type { ChangeEventHandler, FC, FormEventHandler } from 'react'
import { useState } from 'react'
import ButtonPrimary from '@/components/ui/button-primary/button-primary'
import { useRegisterMutation } from '@/store/api/user.api'
import { UserRequestRegisterInterface } from '@/types/user.interface'
import BackendErrors from '@/components/common/backend-errors/backend-errors'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setCurrentUser, setIsLoggedIn } from '@/store/auth/auth.slice'
import { StatusAuthorization } from '@/lib/constants'
import { useRouter } from 'next/navigation'

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
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleUpdateFormData: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const name = evt.target.name as keyof UserRequestRegisterInterface['user']
    const value = evt.target.value
    const result = { ...formData.user, [name]: value }
    setFormData({ user: result })
  }

  const handeSubmitForm: FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault()
    try {
      const result = await register(formData).unwrap()
      dispatch(setCurrentUser(result))
      dispatch(setIsLoggedIn(StatusAuthorization.Authorized))
      router.push('/')
    } catch (err) {
      console.error('Register errors', err)
    }
  }

  return (
    <>
      {error && <BackendErrors backendErrors={error} />}
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
