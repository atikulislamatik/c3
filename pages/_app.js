import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/navigation";
import Layout from "../components/Layout";
import "../styles/bootstrap.min.css";
// import '../styles/globals.css';
import '../styles/remixicon.css';
import '../styles/style.css';

import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </>
  );
}

export default MyApp
