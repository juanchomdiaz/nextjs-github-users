import { Navbar } from 'react-bootstrap';

import Link from 'next/link';

import LanguageSelector from '@components/common/LanguageSelector';

import styles from './Header.module.css';

const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="justify-content-between">
      <Link href="/users">
        <a>
          <Navbar.Brand className={styles.navbarBrand}>
            <img
              alt="Github Users Logo"
              src="/images/svg/logo.svg"
              width="40"
              height="40"
              className={styles.navbarLogo}
            />
            <div className={styles.brandName}>Github's Users</div>
          </Navbar.Brand>
        </a>
      </Link>
      <LanguageSelector />
    </Navbar>
  );
};

export default Header;
