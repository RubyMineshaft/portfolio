import Navbar from "./components/navbar/Navbar";
import Info from "./components/info/Info";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from 'react';
import Projects from "./components/projects/Projects";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="App">
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="sections">
        <Info/>
        <Portfolio />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
