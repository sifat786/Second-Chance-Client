import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import errorPage from '../../assets/error.png';

const ErrorPage = () => {

  return (
    <div className='mt-[100px] md:mt-10 lg:mt-0'>
            <div className='flex justify-center'>
                <img className='w-auto lg:w-[40%] object-cover' src={errorPage}/>
            </div>
            <div className="rounded-md flex justify-center">
                <Link to={'/'}>
                    <button className="py-2 px-4 rounded-lg flex items-center gap-2 bg-gradient-to-b from-green-600 via-green-400 to-green-200 md:text-lg font-semibold">
                        <FaArrowLeftLong/>
                        Back to home
                    </button>
                </Link>
            </div>
      </div>
  );
};

export default ErrorPage;
