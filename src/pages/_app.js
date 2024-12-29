import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <h1>Apple Watch Studio Clone</h1>
      </header>
      <Component {...pageProps} />
      <footer>
        <p>Made with ❤️ for learning purposes</p>
      </footer>
    </>
  );
}

export default MyApp;
