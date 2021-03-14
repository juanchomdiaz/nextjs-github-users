import Head from 'next/head';

import UsersState from '@context/users/UsersState';
import UsersListWrapper from '@components/views/UsersListWrapper';

import githubapiService from '@services/githubapi';

export default function Main({ users }) {
  return (
    <>
      <Head>
        <title>Github's Users Browser</title>
      </Head>
      <UsersState users={users}>
        <UsersListWrapper />
      </UsersState>
    </>
  );
}

export const getServerSideProps = async () => {
  const users = await githubapiService.getUsers();

  return {
    props: {
      users,
    },
  };
};
