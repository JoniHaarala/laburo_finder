import React from 'react';
import { CircularProgress } from "@mui/material"
import { getAllJobs } from '../../services/jobs'
import Trabajo from './trabajoInfo'
import CardPagination from '../cards/paginacion';

class JobCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            jobs: []
        }
    }

    async componentDidMount() {
        const jobs = await getAllJobs()
        this.setState({ jobs: jobs })
    }

    // handleSearch = async (search) => {
    //   const responseJson = await getMemesBySearch(search)
    //   this.setState({ jobs: responseJson.result })
    // }
    fecha = (fecha) => {
        let newtime = new Date().getTime();
        let jobday = new Date(fecha).getTime();
        let diferencia_fecha = newtime - jobday;
        diferencia_fecha = Math.round(diferencia_fecha / (1000 * 60 * 60 * 24));
        return diferencia_fecha
    }

    render() {
        const { jobs } = this.state
        const ini = 1
        return (
            <div>
                {!jobs ?
                    (<section className="my-20 flex justify-center">
                        <CircularProgress />
                    </section>)
                    :
                    jobs.slice(ini,ini+5).map((work) => <Trabajo
                        id={work.id}
                        company_name={work.company_name}
                        imageUrl={work.company_logo}
                        job_name={work.title}
                        jobType={work.job_type}
                        location={work.candidate_required_location}
                        time={this.fecha(work.publication_date)}
                    />)
                }
                <CardPagination/>
            </div>
        )
    }
}

export default JobCard;