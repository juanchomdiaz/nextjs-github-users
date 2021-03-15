import "../styles/globals.css";

import AppLayout from "@components/layout/AppLayout";

import i18n from '@i18n/i18n';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
