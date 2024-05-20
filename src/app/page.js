import BrandsCarrousel from "./components/carrouse-brand/BrandsCarrousel.jsx";
import Items from "./components/home/Items.jsx";
import NewProducts from "./components/home/NewProducts.jsx";
import Slider from "./components/home/Slider.jsx";



export default function Home() {
  return (
    <>
      <Slider />
      <Items />
      <NewProducts />
      <BrandsCarrousel />
    </>
  );
}
