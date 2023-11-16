import type { FC } from 'react';
import { Metadata } from 'next'
import LoginForm from '@/components/auth/login-form/login-form'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign In | Next Real World',
}

const Page: FC = () => {
 return (
   <div className="auth-page">
     <div className="container page">
       <div className="row">
         <div className="col-md-6 offset-md-3 col-xs-12">
           <h1 className="text-xs-center">Sign In</h1>
           <p className="text-xs-center">
             <Link href="/sign-up">Need an account?</Link>
           </p>
           <ul className="error-messages">
             <li>That email is already taken</li>
           </ul>
           <LoginForm />
         </div>
       </div>
     </div>
   </div>
 );
};

export default Page;
