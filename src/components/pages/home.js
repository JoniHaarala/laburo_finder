import { getValue } from '@testing-library/user-event/dist/utils';
import JobCard from '../cards/jobcard';
import SearchBar from '../searchBar';
import Sidebar from '../sidebar/sidebar';

export default function Home () {
    return (
        <div>
            <div className="flex justify-center bg-[url(https://photos.smugmug.com/Wallpapers/i-wfHXmc3/0/40e227c5/O/HDRshooter-super-ultra-wide-wallpaper-029.jpg)] 
        bg-no-repeat bg-cover bg-center rounded-xl h-32 md:h-52 md:rounded-2xl">
                <SearchBar placeholder='Title, companies, expertise or benefits' value={getValue}></SearchBar>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 my-10'>
                <Sidebar />
                <div className='w-full mb-10'>
                    <JobCard/>
                </div>
            </div>
            
            <div>
                <h1>hola hola</h1>
            </div>
        </div>
    );
}

/* nota: estoy en la nueva rama searchbar OJO */