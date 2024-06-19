import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const DonationCampaigns = () => {
  const axiosSecure = useAxiosSecure();

  const { data: donations = [] } = useQuery({
    queryKey: ["petDonate"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donations");
      return res.data;
    },
  });

  return (
    <div className='pt-28 bg-gray-50 dark:bg-gray-900 p-10 min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {donations.map((campaign, i) => (
            <div
              key={i}
              className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg'
            >
              <img
                src={campaign?.image}
                alt={campaign?.name}
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <div className='pt-6 pb-4'>
                <h3 className='text-2xl dark:text-white font-bold mb-2'>
                  {campaign?.name}
                </h3>
                <p className='text-gray-700 dark:text-white mb-1'>
                  Max Donation: ${campaign?.maxDonationAmount}
                </p>
                <p className='text-gray-700 dark:text-white mb-1'>
                  Donated Amount: ${campaign?.getDonationAmount}
                </p>
                <Link to={`/donationDetails/${campaign._id}`}>
                  <button className='mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200'>
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationCampaigns;
