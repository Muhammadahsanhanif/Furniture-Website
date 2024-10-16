
import Header from "../component/header";
import backgroundImage from "../images/Rectangle 1.jpg";
import Cart from './product';
import Benefits from '../component/benefit';
import Footer from '../component/footer';
import Filter from '../component/filter';



function Shop() {
 

  return (
    <div>
      <Header />

      <div className="relative text-center">
        <div className="relative">
          <img
            className="w-full h-[50vh] object-cover object-center"
            src={backgroundImage}
            alt="Scandinavian interior mockup wall decal background"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
            <h1 className="text-4xl font-bold">Shop</h1>
            <span className="text-lg mb-2">Home &gt; Shop</span>
          </div>
        </div>
      </div>

     <Filter/>

    
      <Cart  />
      <Benefits/>
      <Footer/>
    </div>
  );
}

export default Shop;
