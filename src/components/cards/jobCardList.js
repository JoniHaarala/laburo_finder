import React, { useEffect, useState } from 'react'
import { CircularProgress } from "@mui/material"
import Trabajo from './card'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import usePagination from "./paginacion";

function JobCard({ result }) {

    let jobs = [];
    if (result.data) {
        jobs = result.data.Search || [];
    }

    useEffect(()=>{
        fetch('https://remotive.io/api/remote-jobs')
            .then((res) => res.json())
            .then((data) => {
                let job = data.jobs
                jobs = 1;
            })
    },[])

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
            {!jobs ?
                (<section className="my-20 flex justify-center">
                    <CircularProgress />
                </section>)
                :
                _DATA.currentData().map((work) => <Trabajo key={work.id} jobs={work} />
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