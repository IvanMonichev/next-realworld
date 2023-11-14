"use client"
import type { FC } from 'react';
import ButtonPrimary from '@/components/ui/button-primary/button-primary'
import { useAppSelector } from '@/hooks/useAppSelector'

type RegisterFormProps = {

};

const RegisterForm: FC<RegisterFormProps> = () => {
 console.log(`RegisterForm component is working`);
  const state = useAppSelector((state) => state.auth.isLoggedIn)
  console.log(state)
 return (
   <form>
     <fieldset className="form-group">
       <input className="form-control form-control-lg" type="text" placeholder="Username" />
     </fieldset>
     <fieldset className="form-group">
       <input className="form-control form-control-lg" type="text" placeholder="Email" />
     </fieldset>
     <fieldset className="form-group">
       <input className="form-control form-control-lg" type="password" placeholder="Password" />
     </fieldset>
     <ButtonPrimary>Sign Up</ButtonPrimary>
   </form>
 );
};

export default RegisterForm;
