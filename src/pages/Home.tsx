import { Link } from "react-router-dom";

export const Home = () => {
    return(
        <div>
            Página HOME! - <Link to="/sobre">Ir para Sobre</Link>
        </div>
    );
}