import { useAuth0 } from '@auth0/auth0-react';

const CtaForm = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const emailValidator = (e) => {
    e.preventDefault();

    const emailRgxValidator =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const emailInputElem = document.querySelector('.ctaEmailInput');
    const errorElem = document.querySelector('.emailError');
    const isValid = emailRgxValidator.test(emailInputElem.value);

    if (errorElem && emailInputElem) {
      if (isValid) {
        errorElem.style.display = 'none';
        emailInputElem.style.borderBottom = 'none';
        emailInputElem.value = '';
        loginWithRedirect();
      } else {
        emailInputElem.style.borderBottom = '3px solid orange';
        errorElem.style.display = 'block';
      }
    }
  };

  return (
    <form className='ctaForm' onSubmit={emailValidator}>
      <h3 className='ctaFormTitle'>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className='ctaFormInputBox'>
        <input
          type='email'
          className='ctaEmailInput'
          placeholder='Email address'
        />

        <button className='ctaSubmitBtn' disabled={isAuthenticated}>
          {isLoading ? (
            <div className='btnSpinner'> </div>
          ) : (
            <>
              GetStarted
              <span className='chervanRight'>&rsaquo;</span>
            </>
          )}
        </button>
      </div>
      <div className='emailError'>Email is requierd!</div>
    </form>
  );
};

export default CtaForm;
