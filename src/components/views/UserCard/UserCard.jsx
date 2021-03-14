import { useContext } from 'react';

import PropTypes from 'prop-types';

import UsersContext from '@context/users/UsersContext';
import useImage from '@hooks/useImage';

import { Card, Fade, Image } from 'react-bootstrap';

import Skeleton from 'react-loading-skeleton';

import styles from './UserCard.module.scss';

const UserCard = ({ user }) => {
  const { isReady } = useContext(UsersContext);

  const imageSrc = user && user.avatar_url;
  const { image, isLoaded } = useImage({ src: imageSrc });

  return (
    <>
      <Card className={`shadow p-3 mb-5 bg-white rounded ${styles.card}`}>
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
              <Skeleton />
              <p></p>
              <Skeleton />
            </>
          ) : (
            <Fade in={isLoaded}>
              <div>
                <p className={styles.username}>{user.login}</p>
                <p>
                  <a href={user.html_url} target="_blank" className={styles.profileLink}>
                    Visit profile
                  </a>
                </p>
              </div>
            </Fade>
          )}
        </div>
      </Card>
    </>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
