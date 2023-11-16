'use client'
import type { FC } from 'react'
import ButtonPrimary from '@/components/ui/button-primary/button-primary'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { UserRequestLoginInterface } from '@/types/user.interface'
import { setCurrentUser, setIsLoggedIn } from '@/store/auth/auth.slice'
import { StatusAuthorization } from '@/lib/constants'
import BackendErrors from '@/components/common/backend-errors/backend-errors'
import { useLoginMutation } from '@/store/api/user.api'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useRouter } from 'next/navigation'
import { setLocalStorage } from '@/lib/utils'
import config from '@/lib/config'

const initialFormData: UserRequestLoginInterface = {
  user: {
    email: '',
    password: ''
  }
}

const LoginForm: FC = () => {
  const [formData, setFormData] = useState<UserRequestLoginInterface>(initialFormData)
  const [login, { isLoading, error }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const handleUpdateFormData: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const name = evt.target.name as keyof UserRequestLoginInterface['user']
    const value = evt.target.value
    const result = { ...formData.user, [name]: value }
    setFormData({ user: result })
  }

  const handeSubmitForm: FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault()
    try {
      const result = await login(formData).unwrap()
      dispatch(setCurrentUser(result))
      setLocalStorage(config.nameToken, result.user.token)
      dispatch(setIsLoggedIn(StatusAuthorization.Authorized))
      router.push('/')
    } catch (err) {
      console.error('Login errors', err)
    }
  }

  return (
    <>
      {error && <BackendErrors backendErrors={error} />}
      <form onSubmit={handeSubmitForm}>
        <fieldset className='form-group'>
          <input className='form-control form-control-lg' type='text' name='email' onChange={handleUpdateFormData} placeholder='Email' />
        </fieldset>
        <fieldset className='form-group'>
          <input className='form-control form-control-lg' type='password' name='password' onChange={handleUpdateFormData} placeholder='Password' />
        </fieldset>
        <ButtonPrimary type='submit' disabled={isLoading}>Sign In</ButtonPrimary>
      </form>
    </>
  )
}

export default LoginForm
