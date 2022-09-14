import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/FooterTwo";
import Tranding from "../components/Tranding/Tranding";
import User from "../components/User/User";
import Writers from "../components/Writers/Writers";
export default function Home() {
  return (
    <>

      <Head>
        <title>Home - C3NTRAL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <Tranding />
      <Writers />
      <Events />
      <User />
      <Footer />
    </>
  )
}
