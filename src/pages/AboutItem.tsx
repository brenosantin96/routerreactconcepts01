import { useParams, useNavigate } from 'react-router-dom'

export const AboutItem = () => {

    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }

    const handleHomeButton = () => {

        let name: string = 'ciclano'

        navigate(`/sobre/${name}`);
    }

    return (
        <div>
            Página sobre {params.slug?.toUpperCase()} - Esse nome possui {params.slug?.length} letras;
            <hr />
            <button onClick={handleBackButton}>Voltar</button>
            <button onClick={handleHomeButton}>Home</button>
        </div>

    );
}