import React, { useEffect, useState } from 'react'
import { CircularProgress } from "@mui/material"
import Trabajo from './card'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import usePagination from "./paginacion";

function JobCard({ result }) {

    let [jobs, setJobs] = useState([]);
    
    // useEffect(() => {
    //     fetch('https://remotive.io/api/remote-jobs')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             let job = data.jobs
    //             setJobs(job)
    //         })

    // }, [])

    if (result) {
        setJobs(result || []);
    }

    let [page, setPage] = useState(1);
    const PER_PAGE = 5;

    const count = Math.ceil(jobs.length / PER_PAGE);
    const _DATA = usePagination(jobs, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    return (
        <div>
            {jobs.length === 0 ?
                (<section className="my-20 flex flex-col items-center">
                    <p className='dark:text-slate-200 mb-7 text-lg'>Loading Data, Please Wait</p>
                    <CircularProgress />
                </section>)
                :
                _DATA.currentData().map((work) => <Trabajo key={work.id} props={work} />
                )
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