import type { FC } from 'react';
import ButtonPrimary from '@/components/ui/button-primary/button-primary'

type LoginFormProps = {

};

const LoginForm: FC<LoginFormProps> = () => {

 return (
   <form>
     <fieldset className="form-group">
       <input className="form-control form-control-lg" type="text" placeholder="Email" />
     </fieldset>
     <fieldset className="form-group">
       <input className="form-control form-control-lg" type="password" placeholder="Password" />
     </fieldset>
     <ButtonPrimary>Sign In</ButtonPrimary>
   </form>
 );
};

export default LoginForm;
