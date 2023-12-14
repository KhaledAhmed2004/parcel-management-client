import Banner from "../components/banner/Banner";
import Feature from "../components/feature/Feature";
import Footer from "../components/shared/footer/Footer";
import Statistics from "../components/statistics/Statistics";
import TopDeliveryMan from "../components/topDeliveryMan/TopDeliveryMan";
import WhyChoseUs from "../components/whyChoseUs/WhyChoseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <Statistics></Statistics>
      <WhyChoseUs></WhyChoseUs>
      <TopDeliveryMan></TopDeliveryMan>
      <Footer></Footer>
    </div>
  );
};

export default Home;
