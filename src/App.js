import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About"
import ContactForm from "./components/Contact"
import Resume from "./components/Resume";


function App() {

  const [pageRender, setPageRender] = useState('about')

  const RenderComponent = () => {
    switch (pageRender) {
      case 'about':
        return <About/>
        
      case 'portfolio':
        return <Portfolio/>

      case 'contact':
        return <ContactForm/>

      case 'resume':
        return <Resume/>
  
      default:
        return <About/>
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
