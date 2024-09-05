import Explore from "./Components/Explore/Explore"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import HeroImg from "./assets/hero.jpg"

const bgimage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  position: "relative"
}


function App() {
  

  return (
    <div className="overflow-hidden bg-brandDark text-white">
      <div style={bgimage}>
        <Navbar />
        <Hero />
        <Explore />
      </div>
    </div>
  )
}

export default App
