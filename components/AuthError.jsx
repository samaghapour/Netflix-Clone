import { useAuth0 } from '@auth0/auth0-react';

const AuthError = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className='error-container'>
      you need to
      {
        <span className='auth-error-btn' onClick={() => loginWithRedirect()}>
          sign in/sign up
        </span>
      }
      first!
    </div>
  );
};

export default AuthError;
