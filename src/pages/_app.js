import "../styles/globals.css";

import AppLayout from "@components/layout/AppLayout";

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
