import { useState } from "react";
import reactLogo from "./assets/react.svg";
import AOS from "aos";

import {
  Faq,
  Features,
  Footer,
  Hero,
  Model,
  Navbar,
  Process,
  Services,
} from "./components";

function App() {
  AOS.init();

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Process />
      <Services/>
    </div>
  );
}

export default App;
