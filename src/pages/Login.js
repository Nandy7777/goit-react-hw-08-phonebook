import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { FormWrap } from './Contacts.styled';

export default function Login() {
  return (
    <FormWrap>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </FormWrap>
  );
}
