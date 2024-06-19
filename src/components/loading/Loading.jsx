import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const Loading = () => {
  return (
    <div className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg'>
      <SkeletonTheme baseColor="#e6e9ed" highlightColor="#c1c4c7">
        <p className='text-center mx-auto'><Skeleton count={20} /></p>
      </SkeletonTheme>
    </div>
  );
};

export default Loading;
