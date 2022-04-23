import { Link, useSearchParams } from 'react-router-dom'

export const About = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const setOrder = (order: 'asc' | 'desc') => {
        searchParams.set('order', order)

        setSearchParams(searchParams);
    }


    return (
        <div>

            Filtro: {searchParams.get('filter')}<br />
            Ordem: {searchParams.get('order')}<br />
            <hr />

            <button onClick={() => setOrder('asc')}>Ascendente</button>
            <button onClick={() => setOrder('desc')}>Descendente</button>

            <hr />
            Página Sobre carregada!
            <ul>
                <li><Link to={'/sobre/breno'}>Breno</Link></li>
                <li><Link to={'/sobre/pedro'}>Pedro</Link></li>
            </ul>
        </div>
    );
}