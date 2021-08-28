import { useContext } from 'react';
import { AppContext } from '../../context';
import { CloseTheContents } from '../../helpers';

const PhoneSwitchers = () => {
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
    <ul id='PhoneSwitcher'>
      <li className='watchroomSwitcherItems active' onClick={handleSwitch}>
        movies
      </li>
      <li className='watchroomSwitcherItems' onClick={handleSwitch}>
        series
      </li>
    </ul>
  );
};

export default PhoneSwitchers;
