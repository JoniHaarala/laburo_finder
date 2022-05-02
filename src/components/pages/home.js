import { useState, useEffect } from 'react';
import JobCard from '../cards/jobCardList';
import SearchBar from '../searchBar';
import Sidebar from '../sidebar/sidebar';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// import { getJobs } from '../../services/jobs';

export default function Home() {

    const [Jobs, setJobs] = useState();

    useEffect(() => {
        fetch('https://remotive.com/api/remote-jobs')
            .then((res) => res.json())
            .then((data) => {
                let job = data.jobs
                console.log(job)
                setJobs( job )
            })

    }, [])


    let onSearch = async (texto) => {
        try {
            let titleJobs = Jobs.filter(j => j.candidate_required_location === texto);
            setJobs(titleJobs)
            return onSearch();
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <div className="flex justify-center bg-[url(https://photos.smugmug.com/Wallpapers/i-wfHXmc3/0/40e227c5/O/HDRshooter-super-ultra-wide-wallpaper-029.jpg)] 
        bg-no-repeat bg-cover bg-center rounded-xl h-32 md:h-52 md:rounded-2xl">

                <div className='flex justify-between h-10 w-3/4 md:h-14 px-2 md:px-4 bg-white items-center self-center'>
                    <WorkOutlineIcon />
                    <SearchBar onSearch={onSearch} />
                    {/* <button className=" h-7 w-16 md:h-11 sm:w-1/6 sm:text-sm bg-blue-400 text-center text-white text-xs">Buscar</button> */}
                </div>

            </div>

            <div className='flex flex-col sm:flex-row gap-4 my-10'>
                <Sidebar />
                <div className='w-full mb-10'>
                    <JobCard results={Jobs} />
                </div>
            </div>
        </div>
    );
}
/* nota: estoy en la nueva rama searchbar OJO */