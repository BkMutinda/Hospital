import Home from "./components/Home/Home";
import About from "./components/About/About";
import PageNotFound from "./components/Error/PageNotFound";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Client from "./components/Dashboard/ClientDB/Client";

const App = () => {
  return (
    <>
      <section className=" bg-primary-background text-black ">
        {/* <Home /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="client"  element={<Client />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
};

export default App;
