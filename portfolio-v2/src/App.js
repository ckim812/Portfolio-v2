import "./App.css";
import { About, Work, Header, Navbar, Contact, Resume } from "./components";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState("about");

  return (
    <>
      <Header>
        <Navbar setPage={setPage} />
      </Header>

      {
      // page == "about" ? (<About />) : 
      page == "work" ? (
        <Work />
      ) : page == "contact" ? (
        <Contact />
      ) : page == "resume" ? (
        <Resume />
      ) : (
        <About />
      )}
    </>
  );
};

export default App;
