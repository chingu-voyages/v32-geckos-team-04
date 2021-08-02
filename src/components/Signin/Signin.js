/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import '../Signup/Signup.css';

function Signin({
  isBtnDisabled,
  handleEmail,
  handlePassword,
  errors,
}) {
  return (
    <>
      <Form title="Sign in" buttonText="Sign in" isBtnDisabled={isBtnDisabled}>
        <FormInput
          name="email"
          min="2"
          max="200"
          description="Enter email"
          handler={handleEmail}
          errors={errors}
        />
        <FormInput
          name="password"
          min="8"
          max="200"
          description="Enter password"
          handler={handlePassword}
          errors={errors}
        />
      </Form>
      <Link to="/signup" className="signup-link-container">
        or <span className="signup-link">Sign up</span>
      </Link>
    </>
  );
}

export default Signin;
