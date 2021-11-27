import React from "react";

// import styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
