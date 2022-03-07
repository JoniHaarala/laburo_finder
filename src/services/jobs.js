const baseUrl = 'http://127.0.0.1:3001'

/*
https://remotive.io/api/remote-jobs?limit=50
https://remotive.io/api/remote-jobs
https://remotive.io/api/remote-jobs?category=software-dev
https://remotive.io/api/remote-jobs?company_name=remotive
https://remotive.io/api/remote-jobs?search=front%20end
*/
export async function getAllJobs() {
    const response = await fetch('https://remotive.io/api/remote-jobs');
    const datos = await response.json()
    const jobs = await datos.jobs;
    return jobs
}
export async function getJobsLimit() {
    const response = await fetch(`https://remotive.io/api/remote-jobs?limit=50`)
    const datos = await response.json()
    const jobs = await datos.jobs;
    return jobs
}

/* ------------------------------------------ ESTO PARA PRACTICAR CON APIS PROPIAS ------------------------------------------------------------- */


export async function getJobsByID(id) {
    const response = await fetch(`${baseUrl}/jobs/${id}`)
    const responseJson = await response.json()
    return responseJson
}
export async function getJobsBySearch(loc, jt) {
    const response = await fetch(`${baseUrl}/search/${loc}/${jt}`)
    const responseJson = await response.json()
    return responseJson
}
export async function getJobsByLimit(lim) {
    const response = await fetch(`${baseUrl}/jobs/limit/${lim}`)
    const responseJson = await response.json()
    return responseJson
}
export async function getJobsByCategory(cat) {
    const response = await fetch(`${baseUrl}/jobs/category/${cat}`)
    const responseJson = await response.json()
    return responseJson
}
export async function getJobsByFullTime(ft) {
    if (ft === 'full_time') {
        const response = await fetch(`${baseUrl}/fulltime`)
        const responseJson = await response.json()
        return responseJson
    } else {
        const response = await fetch(`${baseUrl}/notfulltime`)
        const responseJson = await response.json()
        return responseJson
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllJobs,
    getJobsLimit,
    getJobsByID,
    getJobsBySearch,
    getJobsByLimit,
    getJobsByCategory,
    getJobsByFullTime
}