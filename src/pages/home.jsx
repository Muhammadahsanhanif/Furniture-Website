import Header from "../component/header";
import backgroundImage from "../images/scandinavian-interior-mockup-wall-decal-background 1.jpg"

function Home() {
    return (
        <>
        <Header />
        <br/>
        <img 
      style={{
        objectFit: "cover",
        objectPosition: "50% 50%",
        height: "90vh", 
        width: "100%"
      }} 
      src={backgroundImage} 
      alt="Scandinavian interior mockup wall decal background" 
    />
     
        </>
    );
  }
  
  export default Home;
  
  