import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MyDonationCampUpdate = () => {
  const {
    email,
    getDonationAmount,
    image,
    isClose,
    lastDate,
    longDescription,
    maxDonationAmount,
    name,
    pause,
    shortDescription,
    _id,
    createdAt,
  } = useLoaderData();

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const {
      name,
      getDonationAmount,
      maxDonationAmount,
      shortDescription,
      longDescription,
    } = data;

    console.log(data?.petPhoto?.length);

    if (data?.petPhoto?.length > 0) {
      const imageFile = { image: data.petPhoto[0] };

      console.log(imageFile);

      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const petDetail = {
          name,
          getDonationAmount,
          maxDonationAmount,
          shortDescription,
          longDescription,
          image: res.data.data.display_url,
        };

        const petUpdate = await axiosSecure.put(
          `/update-donation-campaign-info/${_id}`,
          petDetail
        );

        if (petUpdate.data.modifiedCount > 0) {
          // show success popup
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} updated successfully!`,
            showConfirmButton: false,
            timer: 1999,
          });
          navigate("/dashboard/myDonationCampaigns");
        }
      }
    } else {
      const petDetail = {
        name,
        image,
        getDonationAmount,
        maxDonationAmount,
        shortDescription,
        longDescription,
      };

      const petUpdate = await axiosSecure.put(
        `/update-donation-campaign-info/${_id}`,
        petDetail
      );

      if (petUpdate.data.modifiedCount > 0) {
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} updated successfully!`,
          showConfirmButton: false,
          timer: 1999,
        });
        navigate("/dashboard/myDonationCampaigns");
      }
    }
  };

  return (
    <div className='max-w-20xl mt-5 mx-auto p-2 md:p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl text-center font-bold mb-4'>
        Update Pet Donation Info
      </h2>
      <div className='divider'></div>
      <form
        className='w-full grid lg:grid-cols-2 items-center gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor='image' className='block text-gray-700'>
            Pet Image
          </label>
          <input type='file' {...register("petPhoto")} className='mt-2' />
        </div>
        <div>
          <label htmlFor='name' className='block text-gray-700'>
            Pet Name
          </label>
          <input
            name='name'
            type='text'
            defaultValue={name}
            {...register("name", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.name && (
            <span className='text-red-600 font-medium'>
              Pet name is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor='maxDonationAmount' className='block text-gray-700'>
            MaxDonationAmount
          </label>
          <input
            name='maxDonationAmount'
            type='number'
            defaultValue={maxDonationAmount}
            {...register("maxDonationAmount", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.maxDonationAmount && (
            <span className='text-red-600 font-medium'>
              maxDonationAmount is required
            </span>
          )}
        </div>

        <div>
          <label htmlFor='getDonationAmount' className='block text-gray-700'>
            getDonationAmount
          </label>
          <input
            name='getDonationAmount'
            type='text'
            defaultValue={getDonationAmount}
            {...register("getDonationAmount", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.getDonationAmount && (
            <span className='text-red-600 font-medium'>
              getDonationAmount is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor='shortDescription' className='block text-gray-700'>
            Short Description
          </label>
          <input
            name='shortDescription'
            type='text'
            defaultValue={shortDescription}
            {...register("shortDescription", { required: true })}
            className='mt-2 p-2 w-full border rounded'
          />
          {errors.shortDescription && (
            <span className='text-red-600 font-medium'>
              Pet short info is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor='longDescription' className='block text-gray-700'>
            Long Description
          </label>
          <input
            name='longDescription'
            type='textarea'
            defaultValue={longDescription}
            {...register("longDescription", { required: true })}
            className='p-2 w-full border border-gray-600 rounded'
          />
          {errors.longDescription && (
            <span className='text-red-600 font-medium'>
              Pet description is required
            </span>
          )}
        </div>
        <div className='mt-5 w-full lg:col-span-2'>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyDonationCampUpdate;
