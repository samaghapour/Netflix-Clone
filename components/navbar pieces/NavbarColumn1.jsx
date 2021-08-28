import { useContext } from 'react';
import { AppContext } from '../../context';
import { CloseTheContents } from '../../helpers';

const NavbarColumn1 = ({ needSwitch }) => {
  const { SwitchToMovie, SwitchToTv } = useContext(AppContext);

  const handleSwitch = (e) => {
    CloseTheContents();
    e.target.classList.add('active');
    if (e.target.innerHTML === 'movies') {
      SwitchToMovie();
    } else {
      SwitchToTv();
    }
  };

  return (
    <div className='watchroomNavbarCol1'>
      <img src='/assets/logo.png' alt='logo' className='watchroomNavbarLogo' />

      {needSwitch && (
        <ul id='watchroomSwitcher'>
          <li className='watchroomSwitcherItems active' onClick={handleSwitch}>
            movies
          </li>
          <li className='watchroomSwitcherItems' onClick={handleSwitch}>
            series
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavbarColumn1;
