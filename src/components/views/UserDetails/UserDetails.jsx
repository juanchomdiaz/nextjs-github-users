import { Image, Button, Row, Col } from 'react-bootstrap';

import { useRouter } from 'next/router';

import { useTranslation } from "react-i18next";

import styles from './UserDetails.module.scss';

import PropTypes from 'prop-types';

const UserDetails = ({ userDetails }) => {
  const router = useRouter();

  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <div className={styles.boxWidget}>
            <div className={`${styles.boxWidgetHeader} ${styles.bg}`}>
              <h1 className={styles.boxWidgetHeaderUsername}>{userDetails.login}</h1>
              <h5 className={styles.boxWidgetHeaderUserlocation}>{userDetails.location}</h5>
            </div>
            <div className={styles.boxWidgetImage}>
              <Image
                className="img-circle"
                src={userDetails.avatar_url}
                alt={userDetails.login}
                roundedCircle
              />
            </div>
            <div className={styles.boxFooter}>
              <Row>
                <Col sm={{ span: 3 }}>
                  <div className={styles.statsWrapper}>
                    <h5 className={styles.statHeader}>{userDetails.public_repos}</h5>
                    <h5 className={styles.statText}>{t("public_repos")}</h5>
                  </div>
                </Col>
                <Col sm={{ span: 3 }} className={styles.borderRight}>
                  <div className={styles.statsWrapper}>
                    <h5 className={styles.statHeader}>{userDetails.followers}</h5>
                    <h5 className={styles.statText}>{t("followers")}</h5>
                  </div>
                </Col>
                <Col sm={{ span: 3 }} className={styles.borderRight}>
                  <div className={styles.statsWrapper}>
                    <h5 className={styles.statHeader}>{userDetails.following}</h5>
                    <h5 className={styles.statText}>{t("following")}</h5>
                  </div>
                </Col>
                <Col sm={{ span: 3 }}>
                  <div className={styles.statsWrapper}>
                    <h5 className={styles.statHeader}>{userDetails.public_gists}</h5>
                    <h5 className={styles.statText}>{t("public_gists")}</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={{ span: 12 }}>
                  <div className="d-flex justify-content-center mt-5 mb-5">
                    <a href={userDetails.html_url} target="_blank" className="btn btn-dark btn-lg">
                    {t("visit_profile")}
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col
          xs={{ span: 6, offset: 3 }}
          md={{ span: 4, offset: 4 }}
          className="d-flex justify-content-center"
        >
          <Button className="btn btn-dark btn-lg" onClick={() => router.back()}>{t("go_back")}</Button>
        </Col>
      </Row>
    </>
  );
};

UserDetails.propTypes = {
  userDetails: PropTypes.object.isRequired,
};

export default UserDetails;
