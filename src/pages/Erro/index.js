import { Link } from "react-router-dom";


function Erro(){

    return(
        
        <div>
            <h1>Opss...</h1>
            <h3>Esta Página não existe</h3>
            <h4>Só foram encontradas estas páginas</h4>

            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contato</Link>
        </div>
    )

}

export default Erro;