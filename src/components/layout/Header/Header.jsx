import { Navbar } from "react-bootstrap";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="justify-content-between">
      <a href="/">
        <Navbar.Brand className={styles.navbarBrand}>
          <img alt="Github Users Logo" src="/images/svg/logo.svg" width="40" height="40" className={styles.navbarLogo} />
          <div className={styles.brandName}>Github Users</div>
        </Navbar.Brand>
      </a>
    </Navbar>
  );
};

export default Header;
