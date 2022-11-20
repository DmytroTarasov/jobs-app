import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container mt-8 text-2xl md:text-3xl flex justify-center items-center flex-col'>
            <p>Page doesn't exist</p>
            <Link to='/' className='mt-4 h-12 w-52 bg-[#E4E5EA] uppercase font-semibold text-xs rounded-lg flex justify-center items-center'>
                Return to job board
            </Link>
        </div>
    )
}

export default NotFound;