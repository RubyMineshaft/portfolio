import Navbar from "./components/navbar/Navbar";
import Info from "./components/info/Info";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from 'react';
import Projects from "./components/projects/Projects";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="App">
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="sections">
        <Info/>
        <Portfolio setCurrentSlide={setCurrentSlide} />
        <Projects currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
