import { useAuth0 } from '@auth0/auth0-react';
import Image from 'next/image';

const LandingNavbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();

  const handleLogin = (e) => {
    if (e.target.innerHTML === 'sign in') {
      loginWithRedirect();
    } else {
      logout();
    }
  };
  return (
    <nav id='LandingNavbar'>
      <Image src='/assets/logo.png' alt='netflix' width={160} height={40} />
      <div id='language-switcher-container-navbar'>
        <select className='language-switch'>
          <option value='English'>English</option>
          <option>Español</option>
        </select>
      </div>

      <button id='signinBtn' onClick={handleLogin}>
        {isLoading ? (
          <div className='btnSpinner'> </div>
        ) : isAuthenticated ? (
          'sign out'
        ) : (
          'sign in'
        )}
      </button>
    </nav>
  );
};

export default LandingNavbar;
