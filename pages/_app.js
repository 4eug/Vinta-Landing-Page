import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-bg-color">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
