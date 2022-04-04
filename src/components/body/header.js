import { Link } from 'react-router-dom';
import Toggle from '../dm/dmToggle';

const Head = () => {
    return (
        <header className="font-[Poppins,system-ui] flex justify-between mb-8 pt-3 md:mt-0 md:py-8 dark:text-white">
            <Link to={'/'}><h1 className="font-bold text-2xl">Laburo <span className="font-light">Finder</span> </h1></Link>
            <Toggle />
            {/* despues agregar el toggle del darkMode desde el otro proyecto y 
        eliminar el NAV q es solo de prueba para el router*/}
        </header>
    );
}

export default Head;