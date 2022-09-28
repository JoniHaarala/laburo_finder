import React, { useState, useEffect } from 'react'
import { CircularProgress } from "@mui/material"
import Trabajo from './card'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import usePagination from "./paginacion";

function JobCard({ result }) {

    let [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        if (result) {
            setJobs(result);
        }
    }, [result])

    console.log(result)

    let [page, setPage] = useState(1);
    const PER_PAGE = 5;

    const count = Math.ceil(jobs.length / PER_PAGE);
    const _DATA = usePagination(jobs, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };


    let jobtype = (jt) => {
        let tipo = '';
        jt === "" ? tipo = "not specified" : tipo = jt.replace("_", " ");
        return tipo
    }

    let fecha = (fecha) => {
        let newtime = new Date().getTime();
        let jobday = new Date(fecha).getTime();
        let diferencia_fecha = newtime - jobday;
        diferencia_fecha = Math.round(diferencia_fecha / (1000 * 60 * 60 * 24));
        return diferencia_fecha
    }

    return (
        <div>
            {jobs.length === 0 ?
                (<section className="my-20 flex flex-col items-center">
                    <p className='dark:text-slate-200 mb-7 text-lg'>Loading Data, Please Wait</p>
                    <CircularProgress />
                </section>)
                :
                _DATA.currentData().map((work) => <Trabajo key={work.id}
                    id={work.id}
                    company_name={work.company_name}
                    imageUrl={work.company_logo}
                    job_name={work.title}
                    jobType={jobtype(work.job_type)}
                    location={work.candidate_required_location}
                    time={fecha(work.publication_date)}
                />)
            }
            <Stack className="my-10 items-end" spacing={2}>
                <Pagination
                    color='primary'
                    variant="outlined"
                    shape="rounded"
                    count={count}
                    page={page}
                    onChange={handleChange}
                />
            </Stack>
        </div>
    )

}

export default JobCard;