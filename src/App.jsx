import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Componentes/Header";
import Principal from "./Componentes/Main";
import Projetos from "./Componentes/Projects";
import Sobre from "./Componentes/About";
import Contato from "./Componentes/Contact";
import Rodape from "./Componentes/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="imagem">
        <Menu/>
        
        <Routes>
          <Route path="/" exact element={<Principal/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
      </div>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
