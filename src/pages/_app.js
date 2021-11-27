import React from "react";

import AppLayout from "../components/Layout/AppLayout/AppLayout";

// import styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </React.Fragment>
  );
}

export default MyApp;
