import Topbar from "./components/Topbar/Topbar";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Menu from "./components/Menu/Menu";

import "./app.scss";
import { useState } from "react";

function App() {
  const [openmenu, setopenmenu] = useState(false);

  return (
    <div className="app">
      <Topbar openmenu={openmenu} setopenmenu={setopenmenu}/>
      <Menu openmenu={openmenu} setopenmenu={setopenmenu}/>
      <div className="sections">
        <Intro/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
