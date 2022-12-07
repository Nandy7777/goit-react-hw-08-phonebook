import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { FormWrap } from './Contacts.styled';

export default function Register() {
  return (
    <FormWrap>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </FormWrap>
  );
}
