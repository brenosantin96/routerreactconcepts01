import {Link} from 'react-router-dom'

export const About = () => {
    return(
        <div>
            Página Sobre carregada!
            <ul>
                <li><Link to={'/sobre/breno'}>Breno</Link></li>
                <li><Link to={'/sobre/pedro'}>Pedro</Link></li>
            </ul>
        </div>
    );
}