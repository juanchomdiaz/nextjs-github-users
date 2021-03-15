import Head from 'next/head';

import UsersState from '@context/users/UsersState';

import UsersListWrapper from '@components/views/UsersListWrapper';
import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';

import githubapiService from '@services/githubapi';

import PropTypes from 'prop-types';
export default function UsersMain({ users, nextUrl, currentUrl, withError }) {

  return (
    <>
      <Head>
        <title>Github's Users Browser</title>
      </Head>
      <UsersState users={users} nextUrl={nextUrl} currentUrl={currentUrl} withError={withError}>
        {withError ? <ErrorMessage /> : <UsersListWrapper />}
      </UsersState>
    </>
  );
}

export const getServerSideProps = async () => {
  const { users, nextUrl, currentUrl, withError } = await githubapiService.getUsers();

  return {
    props: {
      users,
      nextUrl,
      currentUrl,
      withError,
    },
  };
};

UsersMain.propTypes = {
  users: PropTypes.array.isRequired,
  nextUrl: PropTypes.string.isRequired,
  currentUrl: PropTypes.string.isRequired,
  withError: PropTypes.bool.isRequired,
};
