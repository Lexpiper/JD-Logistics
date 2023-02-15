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
  Courier
} from "./components";

function App() {
  AOS.init();

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Process />
      <Services/>
      <Courier/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
