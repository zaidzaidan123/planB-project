import "./App.css";
import Category from "./component/Category";
import ExpertGuidance from "./component/ExpertGuidance";
import Footer from "./component/footer";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import WhyChooseSection from "./component/whyChoose";

function App() {
  return (
    <>
    <Header/>
      <HeroSection/>
      <Category/>
      <ExpertGuidance/>
      <WhyChooseSection />
      <Footer />
    </>
  );
}

export default App;
