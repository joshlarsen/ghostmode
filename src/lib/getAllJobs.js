import jobs from 'jobs.json'
export async function getAllJobs() {
  // let jobs = await import('jobs.json')
  console.log('import', jobs)
  return jobs
}
