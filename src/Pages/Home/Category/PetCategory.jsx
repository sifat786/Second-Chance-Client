import dog from '../../../assets/dog.jpg';
import cat from '../../../assets/cat.jpg';
import rabbit from '../../../assets/rabbit.jpg';
import fish from '../../../assets/fish.jpg';
import hamsters from '../../../assets/hamsters.jpg';
import bird from '../../../assets/bird.jpg';



const PetCategory = () => {
  return (
    <div className="mt-10 md:mt-[70px] lg:my-[100px]">
            <h1 className="text-center text-2xl lg:text-[35px] font-semibold mb-5 md:mb-4">Find Your <span className="text-[#075f47]">Companion</span></h1>
            <p className="w-auto md:w-[580px] text-center mx-auto mt-4 mb-8 text-gray-600 dark:text-gray-400">Welcome to our Pets Category section, where you can discover a wide variety of lovable animals eagerly waiting for their forever homes. Whether you&apos;re looking for a playful puppy, a cuddly kitten, a serene senior pet, or even a unique exotic friend, we have the perfect match for you.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                <div className="w-full h-full bg-cover rounded-lg pt-[250px]" style={{backgroundImage: `url(${dog})`}}>
                  <h3 className='text-center py-2 text-lg font-medium bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 text-white rounded-b-lg'>Dog</h3>
                </div>
                <div className="w-full h-full bg-cover rounded-lg pt-[250px]" style={{backgroundImage: `url(${cat})`}}>
                  <h3 className='text-center py-2 text-lg font-medium bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 text-white rounded-b-lg'>Cat</h3>
                </div>
                <div className="w-full h-full bg-cover rounded-lg pt-[250px]" style={{backgroundImage: `url(${rabbit})`}}>
                  <h3 className='text-center py-2 text-lg font-medium bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 text-white rounded-b-lg'>Rabbit</h3>
                </div>
                <div className="w-full h-full bg-cover rounded-lg pt-[250px]" style={{backgroundImage: `url(${fish})`}}>
                  <h3 className='text-center py-2 text-lg font-medium bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 text-white rounded-b-lg'>Fish</h3>
                </div>
                <div className="w-full h-full bg-cover rounded-lg pt-[250px]" style={{backgroundImage: `url(${hamsters})`}}>
                  <h3 className='text-center py-2 text-lg font-medium bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 text-white rounded-b-lg'>Hamsters</h3>
                </div>
                <div className="w-full h-full bg-cover rounded-lg pt-[250px]" style={{backgroundImage: `url(${bird})`}}>
                  <h3 className='text-center py-2 text-lg font-medium bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 text-white rounded-b-lg'>Bird</h3>
                </div>

            </div> 
        </div>
  );
};

export default PetCategory;