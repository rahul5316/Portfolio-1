import Topbar from "./components/Topbar/Topbar";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Menu from "./components/Menu/Menu";
import Education from "./components/Education/Education";
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
        <Education/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
