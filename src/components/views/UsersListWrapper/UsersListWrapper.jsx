import { Fragment } from "react";

import { Row, Col } from "react-bootstrap";

import UsersList from "@components/views/UsersList";
import UsersListPager from "@components/views/UsersListPager";

const UsersListWrapper = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <UsersList />
        </Col>
      </Row>
      <Row>
        <Col>
          <UsersListPager />
        </Col>
      </Row>
    </Fragment>
  );
};

export default UsersListWrapper;
