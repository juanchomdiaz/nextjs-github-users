import { useEffect } from 'react';

import { Image, Button, Row, Card, Col, Fade } from 'react-bootstrap';

import useImage from '@hooks/useImage';

import styles from './UserDetails.module.scss';

import Skeleton from 'react-loading-skeleton';

import PropTypes from 'prop-types';

const UserDetails = ({ userDetails }) => {
  const imageSrc = userDetails && userDetails.avatar_url;
  const { image, isLoaded } = useImage({ src: imageSrc });

  return (
    <>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className={`shadow mb-5 bg-white rounded ${styles.card}`}>
            <Card.Title className="text-capitalize text-center mb-5">
              {userDetails.name}
            </Card.Title>
            {(isLoaded) && (
              <Fade timeour={500} appear={true} in={isLoaded}>
                <Image
                  className={styles.cardImgTop}
                  src={image.src}
                  alt={userDetails && userDetails.login}
                  roundedCircle
                />
              </Fade>
            )}
            <Card.Body className={styles.cardBody}>
              {userDetails && <></>}
              {userDetails && <></>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }} className="text-center">
          <Button onClick={() => history.goBack()}>Go Back</Button>
        </Col>
      </Row>
    </>
  );
};

UserDetails.propTypes = {
    userDetails: PropTypes.object.isRequired,
};

export default UserDetails;
