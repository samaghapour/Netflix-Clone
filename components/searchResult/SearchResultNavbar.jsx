import { useEffect } from 'react';
import { FadeNavbar } from '../../helpers';
import { NavbarColumn1, NavbarColumn2 } from '../navbar pieces';

const SearchResultNavbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => FadeNavbar('searchResultNavbar'));

    return () => {
      window.removeEventListener('scroll', () =>
        FadeNavbar('searchResultNavbar')
      );
    };
  });

  return (
    <nav id='searchResultNavbar'>
      <NavbarColumn1 needSwitch={false} />

      <NavbarColumn2 isSearchResult={true} />
    </nav>
  );
};

export default SearchResultNavbar;
