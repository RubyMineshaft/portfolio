import Navbar from "./components/navbar/Navbar";
import Info from "./components/info/Info";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact"
import "./app.scss";
import { useState } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="App">
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="sections">
        <Info/>
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
