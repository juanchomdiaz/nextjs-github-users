import Head from 'next/head';

import UsersState from '@context/users/UsersState';

import UsersListWrapper from '@components/views/UsersListWrapper';
import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';

import githubapiService from '@services/githubapi';

export default function UsersMain({ users, nextUrl, currentUrl, withError }) {
  return (
    <>
      <Head>
        <title>Github's Users Browser</title>
      </Head>
      <UsersState users={users} nextUrl={nextUrl} currentUrl={currentUrl} withError={withError}>
         {withError ?
          <ErrorMessage message="Ooops! An error has occurred retrieving data from Github API. Try again in a few minutes." />
          : 
          <UsersListWrapper />} 
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
      withError
    },
  };
};
