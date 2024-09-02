import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import SliderGames from "../Components/SliderGames/SliderGames.jsx";
import CardsGames from "../Components/Cards-Games/Cards-Games.jsx";
import Games from "../Components/Games/Games.jsx";
export default function Home() {
  return (
    <>
    <div className="bg-black selection:bg-red-600">
    <Header />
      <SliderGames />
<Games />
    <div className="">
     < CardsGames />
    </div>
     <Footer />
     </div>
    </>
  );
}
