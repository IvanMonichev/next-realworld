import type { FC } from 'react'
import RegisterForm from '@/components/auth/register-form/register-form'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign Up | Next Real World'
}

const Page: FC = () => {

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Sign Up</h1>
            <p className='text-xs-center'>
              <Link href='/sign-in'>Need an account?</Link>
            </p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
