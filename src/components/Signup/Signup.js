/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import './Signup.css';

function Signup({
  isBtnDisabled,
  handleName,
  handleEmail,
  handlePassword,
  errors,
}) {
  return (
    <>
      <div className="signup-image" />
      <Form title="Sign up" buttonText="Sign up" isBtnDisabled={isBtnDisabled}>
        <FormInput
          name="name"
          min="2"
          max="200"
          description="Enter name"
          handler={handleName}
          errors={errors}
        />
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
      <Link to="/signin" className="signup-link-container">
        or <span className="signup-link">Sign in</span>
      </Link>
    </>
  );
}

export default Signup;
