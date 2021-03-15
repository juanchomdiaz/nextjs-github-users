import githubapiService from '@services/githubapi';

import UserDetails from '@components/views/UserDetails';
import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';

import PropTypes from 'prop-types';
export default function UserDetailsPage({ userDetails, withError }) {
  return (
    <>
      {withError ? (
        <ErrorMessage />
      ) : (
        <UserDetails userDetails={userDetails} />
      )}
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { username } = query;

  const { userDetails, withError } = await githubapiService.getUserDetails(username);

  return {
    props: {
      userDetails,
      withError,
    },
  };
};

UserDetailsPage.propTypes = {
    userDetails: PropTypes.object.isRequired,
    withError: PropTypes.bool.isRequired
};
