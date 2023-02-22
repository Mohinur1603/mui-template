import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import GridBox from "./Components/GridBox/GridBox";
import Middle from "./Components/MiddleSection/Middle";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false}>
       <Header/>
       <Landing/>
       <GridBox/>
       <Middle/>
       <Cards/>
       <Footer/>
      </Container>
    </>
  );
}

export default App;
