import '@styles/globalStyles.css'
import 'regenerator-runtime/runtime';
import Layout from '../components/layout/index.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
