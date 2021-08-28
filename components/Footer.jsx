function Footer() {
  return (
    <footer className='Footer'>
      <div className='footerContainer'>
        <div className='footerRow1'>
          Questions? Call{' '}
          <a className='footer-links' href='tel: 1-844-505-2993'>
            {' '}
            1-844-505-2993
          </a>
        </div>

        <ul className='footerList'>
          <li>
            <a
              className='footer-links'
              href='https://help.netflix.com/support/412'>
              FAQ
            </a>
          </li>
          <li>
            <a className='footer-links' href='https://help.netflix.com'>
              Help Center
            </a>
          </li>
          <li>
            <a className='footer-links' href='/youraccount'>
              Account
            </a>
          </li>
          <li>
            <a className='footer-links' href='https://media.netflix.com/'>
              Media Center
            </a>
          </li>
          <li>
            <a className='footer-links' href='http://ir.netflix.com/'>
              Investor Relations
            </a>
          </li>
          <li>
            <a className='footer-links' href='https://jobs.netflix.com/jobs'>
              Jobs
            </a>
          </li>
          <li>
            <a className='footer-links' href='/redeem'>
              Redeem Gift Cards
            </a>
          </li>
          <li>
            <a className='footer-links' href='/gift-cards'>
              Buy Gift Cards
            </a>
          </li>
          <li>
            <a className='footer-links' href='/watch'>
              Ways to Watch
            </a>
          </li>
          <li>
            <a
              className='footer-links'
              href='https://help.netflix.com/legal/termsofuse'>
              Terms of Use
            </a>
          </li>
          <li>
            <a
              className='footer-links'
              href='https://help.netflix.com/legal/privacy'>
              Privacy
            </a>
          </li>
          <li>
            <a className='footer-links' href='#'>
              Cookie Preferences
            </a>
          </li>
          <li>
            <a
              className='footer-links'
              href='https://help.netflix.com/legal/corpinfo'>
              Corporate Information
            </a>
          </li>
          <li>
            <a
              className='footer-links'
              href='https://help.netflix.com/contactus'>
              Contact Us
            </a>
          </li>
          <li>
            <a className='footer-links' href='https://fast.com'>
              Speed Test
            </a>
          </li>
          <li>
            <a
              className='footer-links'
              href='https://help.netflix.com/legal/notices'>
              Legal Notices
            </a>
          </li>
          <li>
            <a
              className='footer-links'
              href='https://www.netflix.com/browse/genre/839338'>
              Only on Netflix
            </a>
          </li>
        </ul>

        <div id='language-switcher-container-footer'>
          <select className='language-switch'>
            <option value='English'>English</option>
            <option>Español</option>
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
