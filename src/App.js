import React from "react";
import "./App.css";

import { Book_call, Navbar} from "./components";
import { Header, About, Service, Footer, FAQ, Contact, Founders, Testimonial } from "./containers";
const App = () => {
  return (
    <div>
      <div className="App">

        <div className="background">
          <div class="background-gradient_blue"></div>
          <div class="background-gradient_purple"></div>
        </div>

          <Navbar />
          <Header /> 
          <Book_call />
          <Service />
          <About />
          <Testimonial />
          <Book_call />
          <div className="section__padding"></div>
          <FAQ />
          <Contact />
          <Founders />
          <Footer />
      </div>
    </div>
  );
};

export default App;
