import About from "./about";
import ArticleCard from "./articleCard";
import Footer from "./footer";
import Hero from "./hero";
import Layanan from "./layanan";

function Home (){
  return(
    <>
      <Hero />
      <About />
      <Layanan />
      <div className="d-flex flex-row">
        <ArticleCard />
      </div>
      <Footer />
    </>
    
  )
}

export default Home;