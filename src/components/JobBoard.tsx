import { useState, useEffect } from 'react';
import useJobsService from '../services/jobs.service';
import { Job } from '../models/job.model';
import JobItem from './JobItem';
import Pagination from './Pagination';
import Spinner from './Spinner';

const JobBoard = () => {
    const { loading, getAllJobs } = useJobsService();
    const [pageSize, setPageSize] = useState<number>(5);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [selectedJobs, setSelectedJobs] = useState<Job[] | null>(null);
    const [allJobs, setAllJobs] = useState<Job[] | null>(null);

    function calculatePages(jobs: Job[]) {
        let pages = Math.floor(jobs.length / pageSize);
        if (jobs.length % pageSize !== 0) pages++;
        setTotalPages(pages);
    }

    function refreshSelectedJobs(page: number = pageNumber, jobs: Job[] = allJobs) {
        setSelectedJobs(jobs.slice(page * pageSize, page * pageSize + pageSize));
    }

    function handlePageSelection(page: number) {
        if (0 <= page && page <= totalPages - 1) {
            setPageNumber(page);
            refreshSelectedJobs(page);
        }
    }

    useEffect(() => {
        getAllJobs().then(jobs => {
            setAllJobs(jobs);
            refreshSelectedJobs(0, jobs);
            calculatePages(jobs);
        });
    }, []);

    return (
        <>
            {loading ? <Spinner />
                : <div className='bg-[#E6E9F2] sm:p-0 sm:pt-7 sm:pb-16 p-2 pb-4'>
                    <div className='container max-w-full sm:max-w-[85%] md:max-w-[72%] grid grid-flow-row auto-rows-auto gap-2'>
                        {
                            selectedJobs?.map((job, index) => (
                                <JobItem key={job.id} job={job}></JobItem>
                            ))
                        }
                        <Pagination
                            pagesVisible={6}
                            pageNumber={pageNumber}
                            totalPages={totalPages}
                            onSelectPage={handlePageSelection} />
                    </div>
                </div>}
        </>
    )
}

export default JobBoard;