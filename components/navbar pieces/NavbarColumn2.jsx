import { useRouter } from 'next/dist/client/router';
import { useAuth0 } from '@auth0/auth0-react';
import { Search } from '@material-ui/icons';
import { OpenProfileBox } from '../../helpers';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Link from 'next/link';

const NavbarColumn2 = ({ isSearchResult }) => {
  const { user, logout } = useAuth0();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchInput = document.querySelector('.watchroomSearch');

    if (searchInput) {
      if (searchInput.value !== '') {
        router.push(`/watchroom/${searchInput.value}`);
      }
    }
  };

  return (
    <div className='watchroomNavbarCol2'>
      <form className='watchroomSearchBox' onSubmit={handleSearch}>
        <button className='searchIcon'>
          <Search />
        </button>
        <input
          autoComplete='off'
          type='search'
          name='search'
          className='watchroomSearch'
          placeholder='Search'
        />
      </form>
      <div className='watchroomProfileBox' onClick={OpenProfileBox}>
        <img
          src={user.picture ? user.picture : '/assets/profile__logo.png'}
          className='profileImg'
          alt='your profile'
        />
        <h4 className='profileName'>{user.given_name}</h4>
        <ArrowDropDownIcon />
        <ul className='profileItemsBox close'>
          <Link href='/'>
            <li className='profileitems'> Back Home</li>
          </Link>
          {isSearchResult && (
            <Link href='/watchroom'>
              <li className='profileitems'> Back to Watchroom</li>
            </Link>
          )}
          <li className='profileitems'> Watch List</li>
          <li className='profileitems' onClick={() => logout()}>
            Sign out of Netflix
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarColumn2;
