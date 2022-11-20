import moment from 'moment';
import { useHttp } from '../hooks/http.hook';
import { Job } from '../models/job.model';

const useJobsService = () => {
	const { loading, request } = useHttp();

	const getAllJobs = async () => {
		const res: Job[] = await request(`${import.meta.env.VITE_API_URL}?access_token=${import.meta.env.VITE_TOKEN}`);
        return res.map(_transformJob);
	};

    const getJobById = async (id: string) => {
        const jobs = await getAllJobs();
        return jobs.find(job => job.id === id);
    }

    const _transformJob = (job: Job) => {
        const [description, other] = job.description.split('Responsopilities:');
        const [responsibilities, benefits] = other.split('Compensation & Benefits:');
        return {
            ...job,
            salaryBoundaries: job.salary.split('-').map(el => el.slice(0, el.length - 1) + '000'),
            postedAgo: moment(job.createdAt.split("T")[0], 'YYYY-MM-DD').fromNow(),
            description,
            responsibilities,
            benefitsDetails: benefits.split('.').slice(0, -1)
        }
    }

	return { loading, getAllJobs, getJobById };
};

export default useJobsService;
