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
    <Link className="cursor-pointer" to={`/description/${id}`}>
        <section className="font-[roboto] hover:shadow-md hover:transition-shadow bg-white dark:bg-gray-800 p-3 rounded-xl grid grid-cols-3 grid-rows-[1fr, min-content] mt-4 w-full md:flex lg:h-40 md:mb-8 lg:max-h-40 md:justify-between md:gap-3">
            <img src={imageUrl} className="bg-black w-20 min-w-min h-20 md:ml-4 sm:self-center" alt="Not Found" />

            <div className="col-span-2 md:flex md:w-full justify-between">
                <div className=" sm:w-2/3 sm:self-center text-blue-800 dark:text-slate-200">
                    <p className="mb-1 text-md font-bold">{company_name}</p>
                    <p className='text-lg'>{job_name}</p>

                    <p className="w-20 mt-2 text-xs border-4 border-blue-500 rounded text-center font-bold">{jobType}</p>
                </div>

                <div className="md:mr-4 my-3 col-start-2 col-span-2 flex items-end text-gray-400 dark:text-slate-200">
                    {/* md:flex-col sm:justify-evenly */}
                    <div className="flex items-center">
                        <PublicIcon color="disabled" className='dark:text-slate-200' />
                        <p className='mr-3 md:mr-5'>{location}</p>
                    </div>
                    <div className="flex items-center">
                        <AccessTimeIcon color="disabled" className='dark:text-slate-200' />
                        <p>{time + ' days ago'}</p>
                    </div>
                </div>
            </div>
        </section>
    </Link>
)

export default Trabajo;