import { ScrollTrigger, SplitText, ScrollToPlugin } from "gsap/all";
import gsap from "gsap";
import NavBar from "./Components/NavBar";
import HeroSection from "./Screens/HeroSection";
import Cocktails from "./Screens/Cocktails";
import About from "./Screens/About";
import Art from "./Screens/Art";
import Menu from "./Screens/Menu";
import Contact from "./Screens/Contact";


gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

function App() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}

export default App
