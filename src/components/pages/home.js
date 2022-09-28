import { useState, useEffect } from 'react';
import JobCard from '../cards/jobCardList';
import SearchBar from '../searchBar';
import Sidebar from '../sidebar/sidebar';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import image from '../../assets/super-ultra-wide-wallpaper.webp'

export default function Home() {

    const [Jobs, setJobs] = useState([]);
    const Title = '';

    useEffect(() => {
        fetch('https://remotive.com/api/remote-jobs')
            .then((res) => res.json())
            .then((data) => {
                let job = data.jobs
                setJobs(job)
            })

    }, [])
    console.log(Jobs)

    if (Title !== '') {
        fetch('https://remotive.com/api/remote-jobs')
            .then((res) => res.json())
            .then((data) => {
                let job = data.jobs
                let titleJobs = job.filter(j => j.candidate_required_location === Title);
                setJobs(titleJobs)
            })
    }
    //console.log(Jobs)
    //bg-[url(https://photos.smugmug.com/Wallpapers/i-wfHXmc3/0/40e227c5/O/HDRshooter-super-ultra-wide-wallpaper-029.jpg)] 
    return (
        <div>
            <div className="flex justify-center rounded-xl h-32 md:h-52 md:rounded-2xl">
                <div className="absolute w-11/12">
                    <img src={image} alt="bgimage" className='object-cover h-[150px] w-full md:h-[200px] md:px-8' />
                </div>
                <div className='flex z-10 rounded-xl justify-between h-10 w-3/4 md:h-14 px-2 md:px-4 bg-white items-center self-center'>
                    <WorkOutlineIcon />
                    <SearchBar />
                    {/* <button className=" h-7 w-16 md:h-11 sm:w-1/6 sm:text-sm bg-blue-400 text-center text-white text-xs">Buscar</button> */}
                </div>

            </div>

            <div className='flex flex-col sm:flex-row gap-4 my-10'>
                <Sidebar />
                <div className='w-full mb-10'>
                    <JobCard result={Jobs} />
                </div>
            </div>
        </div>
    );
}
/* nota: estoy en la nueva rama searchbar OJO */