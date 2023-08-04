import { useState, useEffect } from 'react';
import JobCard from '../cards/jobCardList';
import SearchBar from '../searchBar';
import Sidebar from '../sidebar/Sidebar';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import image from '../../assets/super-ultra-wide-wallpaper.webp'
import { MAIN_SEARCH_STYLE } from '../../constants/constants';

export default function Home() {

    const [query, setQuery] = useState('')
    const [countryQuery, setCountryQuery] = useState('')
    const [Jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://remotive.com/api/remote-jobs')
            .then((res) => res.json())
            .then((data) => {
                let job = data.jobs
                setJobs(job)
            })

    }, [])
    console.log(Jobs.slice(0, 4))
    const search = (data) => {
        if (countryQuery.length > 0) {
            return data.filter(value => value.candidate_required_location.toLowerCase().includes(countryQuery.toLowerCase()))
        }
        return data.filter((value) => (
            value.company_name.toLowerCase().includes(query)
            || value.title.toString().toLowerCase().includes(query)
            || value.category.toLowerCase().includes(query)
        ))
    }
    //bg-[url(https://photos.smugmug.com/Wallpapers/i-wfHXmc3/0/40e227c5/O/HDRshooter-super-ultra-wide-wallpaper-029.jpg)] 
    return (
        <main>
            <section className="flex justify-center rounded-xl h-32 md:h-52 md:rounded-2xl">
                <div className="absolute w-11/12">
                    <img src={image} alt="bgimage" className='object-cover h-[150px] w-full md:h-[200px] md:px-8' />
                </div>
                <div className='flex z-10 rounded-xl justify-between h-10 w-3/4 md:h-14 px-2 md:px-4 bg-white items-center self-center'>
                    <WorkOutlineIcon />
                    <SearchBar
                        query={query}
                        setQuery={setQuery}
                        placeholder={"Search title, companies, expertise or benefits..."}
                        setStyles={MAIN_SEARCH_STYLE}
                    />
                </div>
            </section>

            <section className='flex flex-col sm:flex-row gap-4 my-10'>
                <Sidebar query={countryQuery} setQuery={setCountryQuery} />
                <div className='w-full mb-10'>
                    <JobCard result={search(Jobs)} />
                </div>
            </section>
        </main>
    );
}
/* nota: estoy en la nueva rama searchbar OJO */