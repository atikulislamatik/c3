import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/bootstrap.min.css";
import '../styles/remixicon.css';
import '../styles/style.css';
import '../styles/responsive.css';

import 'aos/dist/aos.css';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
