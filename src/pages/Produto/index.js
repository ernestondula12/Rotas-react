
import { useParams } from "react-router-dom";


function Produto(){

    const { id } = useParams();

    return(

        <div>

            <h1>DETALHES DO PRODUTO</h1>

            <h4>O Produto é: {id}</h4>

        </div>

    )

}

export default Produto;