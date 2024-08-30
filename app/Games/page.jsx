import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Slider from "../Components/Slider/Slider.jsx";
import Cards from "../Components/Cards/Cards.jsx";
export default function Home() {
  return (
    <>
    <div className="bg-black">
    <Header />
      <Slider />
    <div className="">
     < Cards />
    </div>
     <Footer />
     </div>
    </>
  );
}
