import { useEffect } from 'react';
import { NavbarColumn1, NavbarColumn2 } from '../navbar pieces';
import { FadeNavbar } from '../../helpers';

const WatchroomNavbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => FadeNavbar('watchroomNavbar'));

    return () => {
      window.removeEventListener('scroll', () => FadeNavbar('watchroomNavbar'));
    };
  });

  return (
    <nav id='watchroomNavbar'>
      <NavbarColumn1 needSwitch={true} />

      <NavbarColumn2 isSearchResult={false} />
    </nav>
  );
};

export default WatchroomNavbar;
