import { useContext } from 'react'

import UsersContext from '@context/users/UsersContext';

import { Button, Row, Col } from "react-bootstrap";

const UsersListPager = () => {
    const {
        isReady,
        canPrevious,
        canNext,
        fetchPrevious,
        fetchNext,
      }  = useContext(UsersContext);
    
      const handlePreviousClick = () => {
        fetchPrevious();
      };
    
      const handleNextClick = () => {
        fetchNext();
      };
    
      return (
        <>
            <Row className="mb-4">
              <Col lg={{ span: 10, offset: 1 }} md={12}>
                <Button
                  variant="dark"
                  className="float-left"
                  disabled={!canPrevious || !isReady}
                  onClick={() => handlePreviousClick()}
                >
                  Previous
                </Button>
    
                <Button
                  variant="dark"
                  className="float-right"
                  disabled={!canNext || !isReady}
                  onClick={() => handleNextClick()}
                >
                  Next
                </Button>
              </Col>
            </Row>
        </>
      );
}
 
export default UsersListPager;