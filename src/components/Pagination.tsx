import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

type PaginationProps = {
    pagesVisible: number;
    pageNumber: number;
    totalPages: number;
    onSelectPage: (page: number) => void;
}

const Pagination = ({ pagesVisible, pageNumber, totalPages, onSelectPage }: PaginationProps) => {

    function range(start: number, end: number) {
        return Array.from({ length: end - start + 1 }, (_, i) => i).map((_, idx) => start + idx);
    }

    function createPageList() {
        if (totalPages <= pagesVisible) return range(0, totalPages - 1);
        else {
            if (totalPages - pageNumber <= pagesVisible) return range(totalPages - pagesVisible, totalPages - 1);
            return [...range(pageNumber, pageNumber + pagesVisible - 2), '...', totalPages - 1];
        }
    }   

    return (
        <div className='mt-7 sm:mt-10 md:mt-12 mx-auto bg-white grid w-full md:w-4/5 lg:w-2/3 xl:w-1/2 rounded-lg grid-cols-[17.5%_1fr_17.5%] 
            grid-rows-[52px] shadow items-center justify-items-center'>
            <button className='relative cursor-pointer border-right' onClick={() => onSelectPage(pageNumber - 1)}>
                <img src={arrowLeft} alt='prev' />
            </button>
            <ul className='grid grid-flow-col gap-2 sm:gap-6 items-center'>
                {
                    createPageList().map((el, index) => (
                        <li key={index} className={`text-xl font-bold leading-6 relative cursor-pointer text-center w-6 h-6
                        ${el === pageNumber ? 'text-[#5876C5] selected' : 'text-[#70778B]'}`}
                        onClick={() => el !== '...' ? onSelectPage(+el) : null}>{el === '...' ? el : +el + 1 }</li>
                    ))
                }
            </ul>
            <button className='relative cursor-pointer border-left' onClick={() => onSelectPage(pageNumber + 1)}>
                <img src={arrowRight} alt='next' />
            </button>
        </div>
    )
}

export default Pagination;