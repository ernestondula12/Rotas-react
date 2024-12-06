import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importação das nossas paginas que farão as nossas rotas do site

import Home from "./pages/Home";
import Sobre from "./Sobre";
import Contato from "./pages/Contato";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";

//Importando compoenente Header

import Header from "./components/Header";

//Criando componente de Roteamento

function RoutesApp(){

    return(

        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/sobre" element={ <Sobre/>}/>
                <Route path="/contato" element={ <Contato /> }/>
                <Route path="/produto/:id" element={ <Produto /> }/>


                <Route path="*" element={ <Erro />} />
            </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp;