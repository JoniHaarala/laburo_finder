import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import InfoPage from './components/pages/infoPage';
import Head from './components/body/header';
import Footer from './components/body/footer';
import Error404 from './components/body/error404';

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
