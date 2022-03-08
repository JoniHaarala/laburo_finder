import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import InfoPage from './components/pages/infoPage';
import './page404.css'
import Toggle from './components/dm/dmToggle';

const Head = () => {
  return (
    <header className="font-[Poppins,system-ui] flex justify-between mb-8 pt-3 md:mt-0 md:py-8 dark:text-white">
      <h1 className="font-bold text-2xl">Laburo <span className="font-light">Finder</span> </h1>
      <Toggle/>
      {/* despues agregar el toggle del darkMode desde el otro proyecto y 
      eliminar el NAV q es solo de prueba para el router*/}
    </header>
  );
}
const Footer = () => {
  return (
    <footer className="text-center font-[roboto]">
      <p className='text-gray-400 py-5 text-sm font-bold'>Created by JoniHaarala - devChallenges.io</p>
    </footer>
  );
}

const Error404 = () => {
  return (
    <section id="not-found">
      <div id="title">&bull; 404 Error Page &bull;</div>
      <div className="circles">
        <p>404<br />
          <small>PAGE NOT FOUND</small>
        </p>
        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className='bg-slate-100 dark:bg-slate-900 min-h-screen flex flex-col'>
      <div className="mx-3 lg:mx-20 font-[roboto, system-ui]">
        <Head />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/description/:jobid' element={<InfoPage />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
