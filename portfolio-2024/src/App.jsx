import Header from './Header/Header'
import Main from './Main/Main'
import Sobre from './Sobre/Sobre'
import Servicos from './Servicos/Servicos'
import Contato from './Contato/Contato'
import Footer from './Footer/Footer'
import './App.css'
import React, { useEffect } from 'react';


export default function App() {

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return(
  <> 
  <Header />
  <Main />
  <Sobre />
  <Servicos />
  <Contato />
  <Footer />
  </>
    
  )

}