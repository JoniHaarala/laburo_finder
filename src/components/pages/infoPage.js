import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoBody from '../information'


let fecha = (fecha) => {
    let newtime = new Date().getTime();
    let jobday = new Date(fecha).getTime();
    let diferencia_fecha = newtime - jobday;
    diferencia_fecha = Math.round(diferencia_fecha / (1000 * 60 * 60 * 24));
    return diferencia_fecha
}

function InfoPage() {

    const { jobid } = useParams();
    const [jobs, setJobs] = useState({})

    useEffect(() => {
        fetch('https://remotive.io/api/remote-jobs')
            .then((res) => res.json())
            .then((data) => {
                let job = data.jobs
                console.log("holahola" + jobid)
                console.log(job)
                // eslint-disable-next-line eqeqeq
                const jobs = job.find(j => j.id == jobid)
                console.log(jobs)
                setJobs(jobs)
            })

    }, [jobid])

    return (
        
            <div>
                {/* <h1 className='bg-green-500'>{`La DescPage pagina paaa del id: ${jobid}`}</h1> */}
                {
                    <InfoBody
                        company_name={jobs?.company_name}
                        imageUrl={jobs?.company_logo}
                        job_name={jobs?.title}
                        jobType={jobs?.job_type}
                        location={jobs?.candidate_required_location}
                        time={fecha(jobs?.publication_date)}
                        descripcion={jobs?.description}
                        joburl={jobs?.url}
                    />
                }
            </div>
    )
}

export default InfoPage;
