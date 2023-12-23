import Banner from "../../components/Home/Banner";
import Benefit from "../../components/Home/Benefit";
import CallToAction from "../../components/Home/CallToAction";
import Contact from "../../components/Home/Contact";
import FeatureList from "../../components/Home/FeatureList";
import Features from "../../components/Home/Features";
import Newsletter from "../../components/Home/Newsletter";
import Testimonial from "../../components/Home/Testimonial";

const Home = () => {
  return (
    <main>
      <Banner />
      <Features />
      <FeatureList />
      <Benefit />
      <CallToAction />
      <Testimonial />
      <Newsletter />
      <Contact />
    </main>
  );
};

export default Home;
