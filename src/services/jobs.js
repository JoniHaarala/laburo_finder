// const baseUrl = 'http://127.0.0.1:3001'
//contraseña de user para MongoBD atlas = MN3O1KF864w5jn3y

/*
https://remotive.com/api/remote-jobs?limit=50
https://remotive.com/api/remote-jobs
https://remotive.com/api/remote-jobs?category=software-dev
https://remotive.com/api/remote-jobs?company_name=remotive
https://remotive.com/api/remote-jobs?search=front%20end
*/
export async function getJobs() {
    const response = await fetch('https://remotive.com/api/remote-jobs');
    const datos = await response.json()
    const jobs = await datos.jobs;
    return jobs
}
// export async function getJobsLimit() {
//     const response = await fetch(`https://remotive.io/api/remote-jobs?limit=50`)
//     const datos = await response.json()
//     const jobs = await datos.jobs;
//     return jobs
// }

// /* ------------------------------------------ ESTO PARA PRACTICAR CON APIS PROPIAS ------------------------------------------------------------- */


// export async function getJobsByID(id) {
//     const response = await fetch(`${baseUrl}/jobs/${id}`)
//     const responseJson = await response.json()
//     return responseJson
// }
// export async function getJobsBySearch(loc, jt) {
//     const response = await fetch(`${baseUrl}/search/${loc}/${jt}`)
//     const responseJson = await response.json()
//     return responseJson
// }
// export async function getJobsByLimit(lim) {
//     const response = await fetch(`${baseUrl}/jobs/limit/${lim}`)
//     const responseJson = await response.json()
//     return responseJson
// }
// export async function getJobsByCategory(cat) {
//     const response = await fetch(`${baseUrl}/jobs/category/${cat}`)
//     const responseJson = await response.json()
//     return responseJson
// }
// export async function getJobsByFullTime(ft) {
//     if (ft === 'full_time') {
//         const response = await fetch(`${baseUrl}/fulltime`)
//         const responseJson = await response.json()
//         return responseJson
//     } else {
//         const response = await fetch(`${baseUrl}/notfulltime`)
//         const responseJson = await response.json()
//         return responseJson
//     }
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getJobs,
    // getJobsLimit,
    // getJobsByID,
    // getJobsBySearch,
    // getJobsByLimit,
    // getJobsByCategory,
    // getJobsByFullTime
}