import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Job } from '../models/job.model';
import useJobsService from '../services/jobs.service';
import share from '../assets/share.svg';
import bookmark from '../assets/bookmark.svg';
import back from '../assets/back.svg';
import location from '../assets/location.svg';
import star from '../assets/star.svg';
import Map from './Map';
import Spinner from './Spinner';
import NotFound from './NotFound';

const JobDetailed = () => {
    const { loading, getJobById } = useJobsService();
    const [job, setJob] = useState<Job | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            getJobById(id).then(job => {
                setJob(job);
            });
        }
    }, [id]);

    return (
        <>
            {!loading && !job ? <NotFound /> :
                loading || !job ? <Spinner /> : <div className='bg-white px-4 pt-6 pb-9 sm:px-0 sm:pt-14 sm:pb-12 md:pb-24 lg:pb-40 text-[#3A4562]'>
                    <div className='container max-w-[100%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[80%] xl:max-w-[75%]'>
                        <div className='grid grid-cols-1 sm:grid-cols-[60%_35%] justify-between'>
                            <div>
                                <div className='grid grid-flow-row md:grid-flow-col md:auto-cols-auto items-center relative divider'>
                                    <h2 className='font-bold text-[28px]'>Job Details</h2>
                                    <div className='mt-3 md:mt-0 grid grid-flow-col auto-cols-max md:grid-cols-[70%_30%] font-normal text-lg font-proximaNova sm:font-roboto md:justify-items-end gap-4 md:gap-2 lg:gap-0'>
                                        <div className='grid grid-flow-col auto-cols-max md:auto-cols-auto items-center gap-1 xl:gap-2'>
                                            <img className='hidden sm:block cursor-pointer' src={bookmark} alt='bookmark' />
                                            <img className='block sm:hidden h-5 w-5 cursor-pointer' src={star} alt='star' />
                                            <span>Save to my list</span>
                                        </div>
                                        <div className='grid grid-flow-col auto-cols-auto items-center gap-2 xl:gap-3.5'>
                                            <img className='cursor-pointer' src={share} alt='share' />
                                            <span>Share</span>
                                        </div>
                                    </div>
                                </div>

                                <button className='hidden sm:block font-proximaNova mt-6 md:mt-10 rounded-lg bg-[#384564] w-32 h-14 text-xs font-medium text-white uppercase'>Apply now</button>
                                <div className='mt-8 sm:mt-6 md:mt-9 grid grid-flow-row xl:grid-cols-[65%_30%] justify-between relative'>
                                    <h2 className='text-2xl sm:text-xl lg:text-2xl font-bold'>{job?.title}</h2>
                                    <div className='mt-3 xl:mt-0 grid grid-flow-row auto-rows-min justify-end sm:justify-start'>
                                        {job.salaryBoundaries.length >= 2 && <span className='font-bold lg:text-xl'>&#x20AC; {job.salaryBoundaries[0]}&#8212;{job.salaryBoundaries[1]}</span>}
                                        <span className='font-roboto font-normal text-lg'>Brutto, per year</span>
                                    </div>
                                    <span className='mt-2 inline-block font-proximaNova sm:font-[Roboto] text-sm sm:text-base lg:text-lg font-light sm:font-normal text-[#38415D] opacity-50 absolute sm:static bottom-5'>Posted {job.postedAgo}</span>
                                </div>

                                <div className='mt-4 sm:mt-2 font-proximaNova sm:font-roboto text-lg font-normal leading-6'>
                                    <div>
                                        {job.description}
                                    </div>

                                    <section className='mt-11 sm:mt-6 md:mt-10'>
                                        <h3 className='font-bold text-xl sm:text-lg'>Responsopilities</h3>
                                        <div className='mt-0 sm:mt-4'>
                                            {job.responsibilities}
                                        </div>
                                    </section>

                                    <section className='mt-6 md:mt-10'>
                                        <h3 className='font-bold text-xl sm:text-lg'>Compensation & Benefits:</h3>
                                        <p></p>
                                        <ul className='ml-8 sm:ml-0 mt-9 sm:mt-4'>
                                            {
                                                job.benefitsDetails.map((benefit, index) => (
                                                    <li key={index} className='relative benefit'>{benefit}</li>
                                                ))
                                            }
                                        </ul>
                                    </section>

                                    <button className='block mx-auto sm:ml-0 font-proximaNova mt-6 md:mt-10 rounded-lg bg-[#384564] w-32 h-14 text-xs font-medium text-white uppercase'>Apply now</button>

                                    <div className='mt-32 sm:mt-12 md:mt-16 lg:mt-20 grid'>
                                        <div className='order-2 sm:order-1'>
                                            <h2 className='mt-16 sm:mt-0 font-bold text-[28px] relative divider'>Additional info</h2>

                                            <span className='inline-block mt-8'>Employment type</span>
                                            <div className='mt-3 grid sm:grid-cols-3 gap-2 grid-rows-[45px] grid-flow-col sm:auto-cols-fr auto-cols-max'>
                                                {
                                                    job.employment_type.map((type, index) => (
                                                        <div key={index} className='p-2 sm:p-0 bg-[#E1E6F4] rounded-lg
                                                    font-bold text-base flex items-center justify-center text-[#55699E] border-dark-blue'>
                                                            {type}
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                            <span className='inline-block mt-6'>Benefits</span>
                                            <div className='mt-3 grid sm:grid-cols-3 gap-2 grid-rows-[45px] grid-flow-col sm:auto-cols-fr auto-cols-max'>
                                                {
                                                    job.benefits.map((benefit, index) => (
                                                        <div key={index} className='p-2 sm:p-0 bg-[#FFF8D9] rounded-lg
                                                    font-bold text-base flex items-center justify-center text-[#988B49] border-yellow'>
                                                            {benefit}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div className='order-1 sm:order-2'>
                                            <h2 className='sm:mt-12 md:mt-16 lg:mt-20 font-bold text-[28px] relative divider'>Attached images</h2>

                                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 mt-8 grid-rows-[112px] auto-rows-[112px]'>
                                                {
                                                    job.pictures?.map((picture, index) => (
                                                        <img key={index} src={`${picture}?random=${index}`} alt="image" className='w-full h-full object-cover rounded-lg' />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='hidden sm:block'>
                                    <Link to='/' className='sm:mt-12 md:mt-16 lg:mt-24 h-12 w-52 bg-[#E4E5EA] rounded-lg uppercase font-semibold text-xs text-[#3A4562] grid grid-flow-col items-center translate-x-0 md:-translate-x-14'>
                                        <img className='justify-self-center' src={back} alt='back' />
                                        <span className='justify-self-start'>Return to job board</span>
                                    </Link>
                                </div>
                            </div>

                            <h2 className='mt-16 mb-8 sm:hidden font-bold text-[28px] relative divider'>Contacts</h2>

                            <div className='grid grid-rows-2 h-[435px] rounded-md bg-black'>
                                <div className='bg-[#2A3047] relative overflow-hidden text-[#E7EAF0] rounded-t-md'>
                                    <div className='hidden sm:absolute rounded-full h-64 w-64 bg-[#202336] -top-3 -left-20 z-0'></div>

                                    <div className='absolute w-full h-full z-10 md:text-base lg:text-lg font-roboto font-light py-8 px-16 sm:px-7 sm:pt-5 sm:pb-3 lg:px-10 lg:pt-6 xl:px-14 xl:pt-8 xl:pb-5 text-[#E8EBF3]'>
                                        <h3 className='md:text-lg lg:text-xl font-bold font-proximaNova'>Department name. <br /> {job?.name}.</h3>
                                        <div className='mt-2 grid grid-flow-row auto-rows-auto gap-2'>
                                            <span className='leading-6 text-[#E7EAF0] sm:text-[#E8EBF3]'><img className='inline-block mr-2' src={location} alt='location' />{job?.address}</span>
                                            <span className='leading-6 text-white opacity-60 sm:text-inherit sm:opacity-100'>{job.phone}, <br /> {job.email}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Map position={{ lat: job.location.lat, lng: job.location.long }} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
};

export default JobDetailed;


