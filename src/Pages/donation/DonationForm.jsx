import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const DonationForm = ({ amount, setAmount, closeModal, donationDetails, navigate }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const { data } = await axiosSecure.post("/create-payment-intent", {
        amount: parseInt(amount),
      });

      console.log({ data });

      const { clientSecret } = data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      console.log({ result });

      if (result.error) {
        console.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log("Payment successful!");
          console.log(result.paymentIntent.id);
          setTransactionId(result.paymentIntent.id);

          const donation = {
            name: user?.displayName,
            email: user?.email,
            donation: amount,
            refund: false,
            transactionId: result.paymentIntent.id,
            date: new Date(),
            petId: donationDetails?._id,
          };

          const res = await axiosSecure.post("/payments", donation);
          console.log("payment saved", res.data);

          if (res.data?.insertedId) {
            closeModal();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thank you for Donate",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/myDonations");
          }
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Donation Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Credit Card Details</label>
        <div className="w-full px-3 py-2 border rounded">
          <CardElement />
        </div>
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit Donation
      </button>
    </form>
  );
};

export default DonationForm;