import React, { useState, useEffect } from 'react'
import { CircularProgress } from "@mui/material"
import Trabajo from './trabajoInfo'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import usePagination from "./paginacion";

function JobCard() {

    let [jobs, setJobs] = useState([]);
    // const [filteredData, setFilteredData] = useState([]);
    // const [wordEntered, setWordEntered] = useState("");

    // const handleFilter = (event,data) => {
    //     const searchWord = event.target.value;
    //     setWordEntered(searchWord);
    //     const newFilter = data.filter((value) => {
    //         return value.name.toLowerCase().includes(searchWord.toLowerCase());
    //     });

    //     //searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
    //     if (searchWord === "") {
    //         setFilteredData([]);
    //     } else {
    //         setFilteredData(newFilter);
    //     }
    // };

    // useEffect(()=>{
    //     fetch('https://remotive.io/api/remote-jobs')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             let job = data.jobs
    //             const filteredJobs = job.find(j => j.candidate_required_location === handleFilter);
    //             setJobs(filteredJobs)
    //         })
    // },[handleFilter])

    useEffect(() => {
        fetch('https://remotive.io/api/remote-jobs')
            .then((res) => res.json())
            .then((data) => {
                let job = data.jobs
                setJobs(job)
            })

    }, [])

    let [page, setPage] = useState(1);
    const PER_PAGE = 5;

    const count = Math.ceil(jobs.length / PER_PAGE);
    const _DATA = usePagination(jobs, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    let fecha = (fecha) => {
        let newtime = new Date().getTime();
        let jobday = new Date(fecha).getTime();
        let diferencia_fecha = newtime - jobday;
        diferencia_fecha = Math.round(diferencia_fecha / (1000 * 60 * 60 * 24));
        return diferencia_fecha
    }

    let jobtype = (jt) => {
        let tipo = '';
        jt === "" ? tipo = "not specified" : tipo = jt.replace("_", " ");
        return tipo
    }

    return (
        <div>
            {!jobs ?
                (<section className="my-20 flex justify-center">
                    <CircularProgress />
                </section>)
                :
                _DATA.currentData().map((work) => <Trabajo
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