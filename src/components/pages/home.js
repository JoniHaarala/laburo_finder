import { useState } from 'react';
import JobCard from '../cards/jobCardList';
import SearchBar from '../searchBar';
import Sidebar from '../sidebar/sidebar';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function Home() {

    const [Jobs, setJobs] = useState({
        results: []
    });


    const onSearch = async (text) => {
        fetch('https://remotive.io/api/remote-jobs')
            .then((res) => res.json())
            .then((data) => {
                let job = data.jobs
                const titleJobs = job.find(j => j.candidate_required_location === text);
                setJobs(prevState => {
                    return { ...prevState, results: titleJobs }
                })
            })
        return onSearch();
    }


    return (
        <div>
            <div className="flex justify-center bg-[url(https://photos.smugmug.com/Wallpapers/i-wfHXmc3/0/40e227c5/O/HDRshooter-super-ultra-wide-wallpaper-029.jpg)] 
        bg-no-repeat bg-cover bg-center rounded-xl h-32 md:h-52 md:rounded-2xl">

                <div className='flex justify-between h-10 w-3/4 md:h-14 px-2 md:px-4 bg-white items-center self-center'>
                    <WorkOutlineIcon />
                    <SearchBar props={onSearch} placeholder='Title, companies, expertise or benefits'></SearchBar>
                    {/* <button className=" h-7 w-16 md:h-11 sm:w-1/6 sm:text-sm bg-blue-400 text-center text-white text-xs">Buscar</button> */}
                </div>

            </div>

            <div className='flex flex-col sm:flex-row gap-4 my-10'>
                <Sidebar />
                <div className='w-full mb-10'>
                    <JobCard results={Jobs.results} />
                </div>
            </div>
        </div>
    );
}
/* nota: estoy en la nueva rama searchbar OJO */