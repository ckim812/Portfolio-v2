import "./App.css";
import { About, Work, Header, Navbar, Contact, Resume, Footer } from "./components";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState("about");

  return (
    <>
      <Header>
        <Navbar setPage={setPage} />
      </Header>

      {page == "work" ? (
        <Work />
      ) : page == "contact" ? (
        <Contact />
      ) : page == "resume" ? (
        <Resume />
      ) : (
        <About />
      )}

      <Footer />
    </>
  );
};

export default App;
