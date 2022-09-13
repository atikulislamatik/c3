import Banner from "../components/Banner/Banner";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/FooterTwo";
import Tranding from "../components/Tranding/Tranding";
import User from "../components/User/User";
import Writers from "../components/Writers/Writers";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <Tranding />
      <Writers />
      <Events />
      <User />
      <Footer />
    </>
  )
}
