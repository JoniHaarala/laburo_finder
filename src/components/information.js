import React from 'react'
import { Link } from 'react-router-dom'
import PublicIcon from '@mui/icons-material/Public'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const InfoBody = ({
    company_name,
    imageUrl,
    job_name,
    jobType,
    location,
    time,
    descripcion,
    joburl
}) => {
    return (
        <section className="text-blue-900 dark:text-blue-200 lg:flex lg:gap-10">
            <aside className="font-['Poppins', 'System-ui'] lg:max-w-xs">
                <div className="my-9">
                    <ArrowRightAltIcon className="rotate-180" />
                    <Link className="font-medium text-sm text-blue-500" to={'/'}>Back to search</Link>
                </div>
                <div>
                    <p className="uppercase my-4 text-gray-400">How to Apply</p>
                    <p>
                        Please email a copy of your resume and online portfolio
                        to <a href={joburl} className='text-blue-500'>{joburl}</a>
                    </p>
                </div>
            </aside>

            <main>
                <section className="my-10">
                    <p className="text-2xl font-bold">{job_name}</p>
                    <p className="w-16 my-3 text-xs border-4 border-blue-500 rounded text-center font-bold">{jobType}</p>
                    <div className="flex items-center">
                        <AccessTimeIcon color="disabled" className='dark:text-slate-400' />
                        <p className='text-gray-400'>{time + ' days ago'}</p>
                    </div>
                </section>
                <section className='my-10 flex gap-3'>
                    <img src={imageUrl} className="w-20 min-w-min h-20 md:ml-4 sm:self-center" alt="Not Found" />
                    <div className="space-y-6">
                        <p className="mb-1 text-xl font-bold">{company_name}</p>
                        <div className="flex items-center">
                            <PublicIcon color="disabled" className='dark:text-slate-400' />
                            <p className='mr-3 md:mr-0 text-gray-400'>{location}</p>
                        </div>
                    </div>
                </section>
                <section dangerouslySetInnerHTML={{ __html: descripcion }}></section>
            </main>
        </section>
    );
}

export default InfoBody;