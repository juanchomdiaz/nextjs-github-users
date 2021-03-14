import Head from 'next/head';

import UsersState from '@context/users/UsersState';
import UsersListWrapper from '@components/views/UsersListWrapper';

import getConfig from 'next/config';

const {
  publicRuntimeConfig: { firstPageUrl, userPerPage },
} = getConfig();

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
  const users = await githubapiService.getUsers(firstPageUrl, userPerPage);

  return {
    props: {
      users,
    },
  };
};
