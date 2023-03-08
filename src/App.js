import "./App.css";
import {
  About,
  Work,
  Header,
  Navbar,
  Contact,
  Resume,
  Footer,
} from "./components";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  // const [page, setPage] = useState("about");

  return (
    <>
      <Header>
        {/* <Navbar setPage={setPage} /> */}
        <Navbar></Navbar>
      </Header>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      {/* {page == "work" ? (
        <Work />
      ) : page == "contact" ? (
        <Contact />
      ) : page == "resume" ? (
        <Resume />
      ) : (
        <About />
      )} */}

      <Footer />
    </>
  );
};

export default App;
