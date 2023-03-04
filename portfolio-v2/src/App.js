import "./App.css";
import { Header, Navbar, About, Work } from "./components";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState("about");

  return (
    <>
      <Header>
        <Navbar setPage = {setPage} />
      </Header>

{ 
  page == 'about' ? 
  <About /> : 
  page == 'work' ?
  <Work /> :
  <Work />
}
    </>
  );
};

export default App;
