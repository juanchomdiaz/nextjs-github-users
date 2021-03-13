import { Navbar } from "react-bootstrap";

import "./Header.module.css";

const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="justify-content-between">
      <a href="/">
        <Navbar.Brand>
          <img alt="Github Users Logo" src="/images/svg/logo.svg" width="40" height="40" className="logo" />{" "}
          <div className="brand-name">Github Users</div>
        </Navbar.Brand>
      </a>
    </Navbar>
  );
};

export default Header;
