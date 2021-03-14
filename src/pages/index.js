import Head from 'next/head';

import UsersState from '@context/users/UsersState';
import UsersListWrapper from '@components/views/UsersListWrapper';

import githubapiService from '@services/githubapi';

export default function Main({ users, nextUrl, currentUrl, withError }) {
  return (
    <>
      <Head>
        <title>Github's Users Browser</title>
      </Head>
      <UsersState users={users} nextUrl={nextUrl} currentUrl={currentUrl} withError={withError}>
        <UsersListWrapper />
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
