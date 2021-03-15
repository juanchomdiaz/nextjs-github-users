import { Fragment } from "react";

import Header from "./Header";

import { Container } from "react-bootstrap";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
        <Container className="mt-5">
          {children}
        </Container>
    </Fragment>
  );
};

export default AppLayout;
