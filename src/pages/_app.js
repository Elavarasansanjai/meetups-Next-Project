import '../styles/style.css';
import { Fragment } from 'react';
import Layout from '../../public/components/Layout/Layout';
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout />
      <Component {...pageProps} />
    </div>
  );
}
