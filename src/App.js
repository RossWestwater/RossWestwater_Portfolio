import React, { useState } from "react";
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
      <div style={{minHeight: '13vh'}}>
      <Header page={pageRender} changePage={setPageRender}/>
      </div>
      <main style={{minHeight: '76vh'}}>
        <RenderComponent/>
      </main>
      <footer className="footerBackground" style={{minHeight: '11vh'}}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
