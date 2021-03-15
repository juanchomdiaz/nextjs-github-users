import { useContext } from 'react';

import UsersContext from '@context/users/UsersContext';

import { useTranslation } from 'react-i18next';

import { Button, Row, Col } from 'react-bootstrap';

import { scrollToTop } from '@helpers/ui';

import styles from './UsersListPager.module.scss';

const UsersListPager = () => {
  const { t } = useTranslation();

  const { isReady, canPrevious, canNext, fetchPrevious, fetchNext } = useContext(UsersContext);

  const handlePreviousClick = () => {
    fetchPrevious();
    scrollToTop();
  };

  const handleNextClick = () => {
    fetchNext();
    scrollToTop();
  };

  return (
    <>
      <Row className="mb-4">
        <Col lg={{ span: 10, offset: 1 }} md={12}>
          <Button
            className={`btn btn-dark btn-lg float-left ${styles.pagerBtn}`}
            disabled={!canPrevious || !isReady}
            onClick={() => handlePreviousClick()}
          >
            {t('previous')}
          </Button>

          <Button
            className={`btn btn-dark btn-lg float-right ${styles.pagerBtn}`}
            disabled={!canNext || !isReady}
            onClick={() => handleNextClick()}
          >
            {t('next')}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default UsersListPager;
