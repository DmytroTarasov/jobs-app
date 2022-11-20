import { Link } from "react-router-dom";
import { Job } from '../models/job.model';
import location from '../assets/location.svg';
import bookmark from '../assets/bookmark.svg';
import starFilled from '../assets/star-filled.svg';

type JobItemProps = {
    job: Job;
}

const JobItem = ({ job }: JobItemProps) => {
    return (
        <div className='bg-[#EFF0F5] sm:bg-white rounded-lg px-4 sm:py-6 pt-4 pb-7 shadow'>
            <div className='grid grid-cols-[66px_1fr] sm:grid-cols-[85px_1fr] gap-5 sm:gap-6 items-center relative'>
                <img className='absolute top-0 right-0 cursor-pointer hidden sm:block' src={bookmark} alt="bookmark" />

                <div className='grid items-start h-full'>
                    <img className='mt-9 sm:mt-0 h-[66px] sm:h-[85px] w-full rounded-full' src={job.pictures[0]} alt="photo" />
                </div>

            <div className='grid grid-cols-1 sm:grid-cols-[70%_1fr] lg:grid-cols-[60%_1fr] lg:gap-6 xl:gap-16 2xl:gap-20 items-end'>
                <div className='text-[#878D9D] text-base font-light grid gap-1.5 sm:gap-2 leading-6 order-2 sm:order-1 mt-3.5 sm:mt-0'>
                    <Link to={`${job.id}`} className='text-[#3A4562] text-lg sm:text-xl font-normal sm:font-bold leading-6'>{job.title}</Link>
                    <span>Department name &#8226; {job.name} - AKH</span>
                    <div className='flex gap-2'>
                        <img src={location} alt='location' />
                        <span>{job.address}</span>
                    </div>
                </div>

                <div className='flex justify-between sm:h-3/5 lg:h-full sm:flex-col lg:flex-row order-1 sm:order-2'>
                    <div className='flex items-center justify-center'>
                        {
                            Array.from({ length: 5 }, (_, i) => i).map((el, index) => (
                                <img className='h-[10px] w-[10px] sm:h-[18px] sm:w-[19px]' key={index} src={starFilled} alt='rating' />
                            ))
                        }
                    </div>
                    <p className='text-[#878D9D] text-sm sm:text-base font-light 
                        grid gap-2 md:self-end text-center'>Posted {job.postedAgo} </p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default JobItem;
