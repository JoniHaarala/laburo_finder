import { Route, Routes, Link } from 'react-router-dom';

const Head = () => {
  return (
    <header className="bg-red-400 font-[Poppins,system-ui] mb-8 pt-3 md:mt-0 md:py-8">
      <h1 className="font-bold text-2xl">Laburo <span className="font-light">Finder</span> </h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/description'>description Page</Link></li>
        </ul>
      </nav>
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
const DescPage = () => <h1 className='bg-green-500'>La DescPage pagina paaa</h1>

function App() {
  return (
    <div className='bg-slate-100 min-h-screen flex flex-col'>
      <div className="mx-3 lg:mx-20 font-[roboto, system-ui]">
        <Head />
        <div>
          <Routes>
            <Route path='/' element={<head />} />
            <Route path='/description' element={<DescPage />} />
            <Route path='*' element={<h1>error 404</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
