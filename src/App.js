import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About"

function App() {

  const [pageRender, setPageRender] = useState('portfolio')

  const RenderComponent = () => {
    console.log(pageRender)
    switch (pageRender) {
      case 'portfolio':
        return <Portfolio/>
  
      case 'about':
        return <About/>
  
      default:
        return <div>empty</div>
    }
  }

  return (
    <div className="pageBackground">
      <Header page={pageRender} changePage={setPageRender}/>
      <main>
        <RenderComponent/>
      </main>
      <footer className="footerBackground">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
