// Importation React
import { Link } from 'react-router-dom'

// Importation des assetes
import img from '../../assets/images/not-found.webp'

function PageNotFound() {
    return (
        <div className='notFound'>
            <img 
                className='notFound_img'
                src={img}
                alt='logo 404'
            />
            <p className='notFound_txt'>La page que vous cherchez n'existe pas !</p>
            <Link className='notFound_link' to="/">
                <p>Retour à l'accueil</p>
            </Link>
        </div>
    )
}

export default PageNotFound