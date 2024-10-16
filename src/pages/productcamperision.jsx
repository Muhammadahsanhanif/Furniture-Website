import Benefits from "../component/benefit";
import Best from "../component/best";
import Cart from "../component/cart";
import Footer from "../component/footer";
import Header from "../component/header";
import backgroundImage from "../images/Rectangle 1.jpg";
  
  function Productcomperion (){
    return(
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
              <h1 className="text-4xl font-bold">product camparison</h1>
              <span className="text-lg mb-2">Home &gt; camparison</span>
            </div>
          </div>
        </div>
  
  
  <Cart/>
  <Best/>
      
        <Benefits/>
        <Footer/>
      </div>

    )
}
export default Productcomperion;