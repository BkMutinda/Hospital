import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import PageNotFound from "./components/Error/PageNotFound";
import { Route, Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <section className=" bg-primary-background text-black ">
        {/* <Home /> */}
        <BrowserRouter>
          <Router>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Router>
        </BrowserRouter>
      </section>
    </>
  );
};

export default App;
