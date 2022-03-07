import React from 'react'
import { Link } from 'react-router-dom'
import PublicIcon from '@mui/icons-material/Public'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const Trabajo = ({
    id,
    company_name,
    imageUrl,
    job_name,
    jobType,
    location,
    time
}) => (
    <section className="font-[roboto] bg-white p-3 rounded-xl grid grid-cols-3 grid-rows-[1fr, min-content] mt-4 w-full sm:flex sm:h-40 sm:mb-8 sm:max-h-40 sm:justify-between sm:gap-3">
        <img src={imageUrl} className="bg-black w-20 min-w-min h-20 md:ml-4 sm:self-center" alt="Not Found" />

        <div className="col-span-2 sm:w-2/3 sm:self-center text-blue-800">
            <p className="mb-1 text-md font-bold">{company_name}</p>
            <li key={id} className="list-none"><Link className="cursor-pointer text-lg" to={`/description/${id}`}>{job_name}</Link></li>
            
            <p className="w-16 mt-2 text-xs border-4 border-blue-500 rounded text-center font-bold">{jobType}</p>
        </div>

        <div className="md:mr-4 my-3 lg:max-w-[12rem] col-start-2 col-span-2 flex md:flex-col items-end text-gray-400 sm:justify-evenly">
            <div className="flex items-center">
                <PublicIcon color="disabled" />
                <p className='mr-3 md:mr-0'>{location}</p>
            </div>
            <div className="flex items-center">
                <AccessTimeIcon color="disabled" />
                <p>{time + ' days ago'}</p>
            </div>
        </div>
    </section>
)

export default Trabajo;