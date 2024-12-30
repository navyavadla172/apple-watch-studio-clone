import '../styles/globals.css';  // Import global CSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;  // Render the current page component with its props
}

export default MyApp;
