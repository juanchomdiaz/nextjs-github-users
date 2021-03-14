import { useContext } from 'react';

import PropTypes from 'prop-types';

import UsersContext from '@context/users/UsersContext';

import { Card, Fade, Image } from "react-bootstrap";

import Skeleton from "react-loading-skeleton";

import styles from "./UserCard.module.css";


const UserCard = ({ user }) => {
  const { isReady } = useContext(UsersContext);

  return (
    <>
      <Card className="shadow p-3 mb-5 bg-white rounded">
        <div className={styles.cardImgWrapper}>
          <div className={styles.cardImgInner}>
            {!(isReady) ? (
              <Skeleton circle={true} height={150} width={150} />
            ) : (
              <Fade timeour={500} appear={true} in={true}>
                <Image className={styles.cardImg} src={user.avatar_url} alt={user && user.login} />
              </Fade>
            )}
          </div>
        </div>
        <div className={styles.cardNameWrapper}>
          {!(isReady) ? (
            <Skeleton />
          ) : (
            <Fade>
              <div>
                <p>#{user.login}</p>
                <p><a href={user.html_url} target="_blank">{user.login}</a></p>
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
