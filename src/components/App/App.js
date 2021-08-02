import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';

import {
  MINLENGTH,
  validEmailRegexp,
  validPasswordRegexp,
} from '../../utils/constants';

function App() {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    result: '',
  });

  useEffect(() => {
    setIsBtnDisabled(
      email === ''
      || password === ''
      || password.length < MINLENGTH,
    );
  }, [email, password]);

  useEffect(() => {
    function validateFields() {
      setErrors((previous) => ({
        ...previous,
        email: validEmailRegexp.test(email) || !email
          ? ''
          : 'Invalid email address',
        password: validPasswordRegexp.test(password) || !password
          ? ''
          : 'Password must have 8 characters',
      }));
    }
    validateFields();
  }, [email, password]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Switch>
        <Route path="/signup">
          <Signup
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            handleName={handleName}
            isBtnDisabled={isBtnDisabled}
            name={name}
            email={email}
            password={password}
            errors={errors}
          />
        </Route>
        <Route path="/signin">
          <Signin
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            isBtnDisabled={isBtnDisabled}
            email={email}
            password={password}
            errors={errors}
          />
        </Route>
      </Switch>
    </>
  );
}
export default App;
