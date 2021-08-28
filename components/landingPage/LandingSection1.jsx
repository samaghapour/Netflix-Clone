import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import CtaForm from './CtaForm';

const LandingSection1 = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div id='landing1'>
      <h1 id='landingTitle1'>Unlimited movies, TV shows, and more.</h1>
      <h2 id='landingTitle2'>Watch anywhere. Cancel anytime.</h2>
      <CtaForm />
      {isAuthenticated && (
        <div className='watchroomBtn'>
          <Link href='/watchroom'>Go to Watchroom</Link>
        </div>
      )}
    </div>
  );
};

export default LandingSection1;
