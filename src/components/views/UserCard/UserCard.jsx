import { useContext } from 'react';

import Link from 'next/link';

import PropTypes from 'prop-types';

import UsersContext from '@context/users/UsersContext';
import useImage from '@hooks/useImage';

import { Card, Fade, Image, Button } from 'react-bootstrap';

import Skeleton from 'react-loading-skeleton';

import styles from './UserCard.module.scss';

import { useTranslation } from "react-i18next";

const UserCard = ({ user }) => {
  const { isReady } = useContext(UsersContext);

  const imageSrc = user && user.avatar_url;
  const { image, isLoaded } = useImage({ src: imageSrc });

  const handleVisitProfileBtnClick = (url) => {
    window.open(url, '_blank');
  };

  const { t } = useTranslation();

  return (
    <>
      <Card className={`shadow p-3 mb-5 bg-white rounded ${styles.card}`}>
        <Link href={`/users/${user.login}`}>
          <a>
            <div className={styles.cardImgWrapper}>
              <div className={styles.cardImgInner}>
                {!(isReady && isLoaded) ? (
                  <Skeleton circle={true} height={200} width={200} />
                ) : (
                  <Fade timeour={500} appear={true} in={true}>
                    <Image
                      className={styles.cardImg}
                      src={image.src}
                      alt={user && user.login}
                      roundedCircle
                    />
                  </Fade>
                )}
              </div>
            </div>
            <div className={styles.cardNameWrapper}>
              {!(isReady && isLoaded) ? (
                <>
                  <p></p>
                  <Skeleton />
                </>
              ) : (
                <Fade in={isLoaded}>
                  <div>
                    <p className={styles.username}>{user.login}</p>
                  </div>
                </Fade>
              )}
            </div>
          </a>
        </Link>
        {(isReady && isLoaded) && (
          <Button
            onClick={() => handleVisitProfileBtnClick(user.html_url)}
            className="btn btn-secondary"
          >
            {t("visit_profile")}
          </Button>
        )}
      </Card>
    </>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
