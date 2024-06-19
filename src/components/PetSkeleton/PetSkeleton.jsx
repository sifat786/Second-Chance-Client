import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PetSkeleton = () => {
  return (
    <div className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg'>
      <Skeleton height={192} />
      <div className='pt-6 pb-3'>
        <Skeleton width={`60%`} height={24} />
        <Skeleton width={`40%`} height={20} />
        <Skeleton width={`50%`} height={20} />
        <Skeleton width={`30%`} height={20} />
        <Skeleton width={`40%`} height={40} />
      </div>
    </div>
  );
};

export default PetSkeleton;