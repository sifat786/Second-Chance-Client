import React, { useState } from "react";
import Modal from "react-modal";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

Modal.setAppElement("#root");

const PetDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } = useAuth();
  const locations = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();


  const userName = user?.displayName;
  const userEmail = user?.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    _id,
    name,
    age,
    location,
    image,
    category,
    shortDescription,
    longDescription,
  } = useLoaderData() || {};

  const openModal = () => {
    if (user && user.email) {
      setModalIsOpen(true);
    } else {
      Swal.fire({
        title: "You are not Login!",
        text: "You won't be able to order this without login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Please, login!",
            text: "After login order the food!",
            icon: "success",
          });
          navigate("/login", { state: { from: locations } });
        }
      });
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = async (data) => {
    console.log(data);

    const adoptionData = {
      adoptId: _id,
      userName,
      userEmail,
      phoneNumber: data?.phoneNumber,
      address: data?.address,
    };

    const res = await axiosSecure.post("/adopt-request", adoptionData);

    if (res.data.isExist) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Already send adopt request!",
        showConfirmButton: false,
        timer: 3000,
      });
      navigate("/petListing");
    }

    console.log("Adoption Data Submitted:", res.data);

    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Adopt request send successfully!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/petListing");
    }
    closeModal();
  };

  return (
    <div className='p-10 min-h-screen bg-white dark:bg-black pt-28'>
      <div className='max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg'>
        <img src={image} alt={name} className='w-full h-[400px]  rounded-t-lg' />

        <div className='flex justify-between'>
          <div>
            <h2 className='text-3xl font-bold mt-4 dark:text-white'>{name}</h2>
            <p className='text-gray-700 dark:text-white mt-2'><span className="font-bold">Age:</span> {age}</p>
            <p className='text-gray-700 dark:text-white mt-2'><span className="font-bold">Location:</span> {location}</p>
            <p className='text-gray-700 dark:text-white mt-2'><span className="font-bold">Category:</span> {category}</p>
            <p className='text-gray-700 dark:text-white mt-2'><span className="font-bold">Short Description:</span> {shortDescription}</p>
            <p className='text-gray-700 dark:text-white mt-2'><span className="font-bold">Description:</span> {longDescription}</p>
          </div>
          <button
            onClick={openModal}
            className='mt-6 h-10 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200'
          >
            Adopt
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='mt-14 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'
        overlayClassName='fixed inset-0 bg-black bg-opacity-30'
      >
        <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
          <h2 className='text-2xl font-bold mb-4'>
            You want to adopt - {name}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label className='block text-gray-700'>User Name</label>
              <input
                type='text'
                value={userName}
                disabled
                className='mt-1 p-2 w-full border border-gray-300 rounded bg-gray-100'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Email</label>
              <input
                type='email'
                value={userEmail}
                disabled
                className='mt-1 p-2 w-full border border-gray-300 rounded bg-gray-100'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Phone Number</label>
              <input
                type='text'
                name='phoneNumber'
                {...register("phoneNumber", { required: true })}
                className='mt-1 p-2 w-full border border-gray-300 rounded'
              />
              {errors.phoneNumber && (
                <span className='text-red-600 font-medium'>
                  Your phone number is required
                </span>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Address</label>
              <textarea
                name='address'
                {...register("address", { required: true })}
                className='mt-1 p-2 w-full border border-gray-300 rounded'
              ></textarea>
              {errors.address && (
                <span className='text-red-600 font-medium'>
                  Your address is required
                </span>
              )}
            </div>
            <button
              type='submit'
              className='w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200'
            >
              Submit
            </button>
          </form>
          <button
            onClick={closeModal}
            className='mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-black transition duration-200'
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PetDetails;


// import React, { useState } from "react";
// import Modal from "react-modal";
// import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import Swal from "sweetalert2";
// import { useForm } from "react-hook-form";
// import useAxiosSecure from "./../../hooks/useAxiosSecure";

// Modal.setAppElement("#root");

// const PetDetails = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const { user } = useAuth();
//   const locations = useLocation();
//   const navigate = useNavigate();
//   const axiosSecure = useAxiosSecure();

//   const userName = user?.displayName;
//   const userEmail = user?.email;

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const {
//     _id,
//     name,
//     age,
//     location,
//     image,
//     category,
//     shortDescription,
//     longDescription,
//   } = useLoaderData() || {};

//   const openModal = () => {
//     if (user && user.email) {
//       setModalIsOpen(true);
//     } else {
//       Swal.fire({
//         title: "You are not Login!",
//         text: "You won't be able to order this without login!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Please, Login!",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: "Please, login!",
//             text: "After login order the food!",
//             icon: "success",
//           });
//           navigate("/login", { state: { from: locations } });
//         }
//       });
//     }
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const onSubmit = async (data) => {
//     const adoptionData = {
//       adoptId: _id,
//       userName,
//       userEmail,
//       phoneNumber: data?.phoneNumber,
//       address: data?.address,
//     };

//     const res = await axiosSecure.post("/adopt-request", adoptionData);

//     if (res.data.isExist) {
//       Swal.fire({
//         position: "top-end",
//         icon: "warning",
//         title: "Already send adopt request!",
//         showConfirmButton: false,
//         timer: 3000,
//       });
//       navigate("/petListing");
//     }

//     if (res.data.insertedId) {
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Adopt request send successfully!",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//       navigate("/petListing");
//     }

//     closeModal();
//   };

//   return (
//     <div className="p-10 min-h-screen bg-gray-50 mt-20">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <img src={image} alt={name} className="w-full h-64 rounded-t-lg" />

//         <div className="flex justify-between">
//           <div>
//             <h2 className="text-3xl font-bold mt-4">{name}</h2>
//             <p className="text-gray-700 mt-2">Age: {age}</p>
//             <p className="text-gray-700 mt-2">Location: {location}</p>
//             <p className="text-gray-700 mt-2">Category: {category}</p>
//             <p className="text-gray-700 mt-2">
//               {shortDescription ? `Short: ${shortDescription}` : ""}
//             </p>
//             <p className="text-gray-700 mt-2">
//               {longDescription ? `Description: ${longDescription}` : ""}
//             </p>
//           </div>
//           <button
//             onClick={openModal}
//             className="mt-6 h-10 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
//           >
//             Adopt
//           </button>
//         </div>
//       </div>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         className="mt-14 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-30"
//       >
//         <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//           <h2 className="text-2xl font-bold mb-4">You want to adopt - {name}</h2>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-4">
//               <label className="block text-gray-700">User Name</label>
//               <input
//                 type="text"
//                 value={userName}
//                 disabled
//                 className="mt-1 p-2 w-full border border-gray-300 rounded bg-gray-100"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 value={userEmail}
//                 disabled
//                 className="mt-1 p-2 w-full border border-gray-300 rounded bg-gray-100"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Phone Number</label>
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 {...register("phoneNumber", { required: true })}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded"
//               />
//               {errors.phoneNumber && (
//                 <span className="text-red-600 font-medium">
//                   Your phone number is required
//                 </span>
//               )}
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Address</label>
//               <textarea
//                 name="address"
//                 {...register("address", { required: true })}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded"
//               ></textarea>
//               {errors.address && (
//                 <span className="text-red-600 font-medium">
//                   Your address is required
//                 </span>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
//             >
//               Submit
//             </button>
//           </form>
//           <button
//             onClick={closeModal}
//             className="mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-200"
//           >
//             Close
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default PetDetails;