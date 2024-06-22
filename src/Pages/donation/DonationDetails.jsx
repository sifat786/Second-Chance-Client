import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import DonationForm from "./DonationForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

const DonationDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const donationDetails = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { data: recommendedDonations = [] } = useQuery({
    queryKey: ["recommendedDonations"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donations");
      return res.data;
    },
  });

  return (
    <div className="container mx-auto px-4 pb-8 pt-28">
      <h1 className="text-3xl font-semibold mb-8">Donation Details</h1>

      {/* pet details */}
      <div className="p-5 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex gap-5">
          <img
            src={donationDetails?.image}
            alt={donationDetails?.name}
            className="w-[500px] h-64 object-fill"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">{donationDetails?.name}</h2>
            <p className="text-gray-700 mb-4">{donationDetails?.shortDescription}</p>
            <p className="text-gray-700 mb-6">{donationDetails?.longDescription}</p>
          </div>
        </div>
        <div className="px-10 py-20">
          <div className="mb-8">
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-green-200">
                <div
                  style={{
                    width: `${(donationDetails?.getDonationAmount / donationDetails?.maxDonationAmount) * 100}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
              <span className="text-xs font-semibold inline-block text-green-600">
                ${donationDetails?.getDonationAmount} / ${donationDetails.maxDonationAmount}
              </span>
            </div>
          </div>
          <button
            onClick={openModal}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* recommended donations */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recommended Donations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendedDonations.map((donation) => (
            <div
              key={donation._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={donation?.image}
                alt={donation?.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{donation?.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* donation modal  */}
      <Elements stripe={stripePromise}>
        <Transition show={isModalOpen} as={React.Fragment}>
          <Dialog
            onClose={closeModal}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-black bg-opacity-50 fixed inset-0" />
            <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-auto z-10">
              <Dialog.Title className="text-xl font-semibold mb-4">
                Donate to {donationDetails.name}
              </Dialog.Title>
              <DonationForm
                amount={amount}
                setAmount={setAmount}
                closeModal={closeModal}
                donationDetails={donationDetails}
                navigate={navigate}
              />
            </div>
          </Dialog>
        </Transition>
      </Elements>
    </div>
  );
};

export default DonationDetails;