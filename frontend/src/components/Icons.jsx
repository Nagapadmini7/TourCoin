 // Icons.js
import React from 'react';
import { FaCreditCard, FaTicketAlt, FaMoneyBill } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center items-center">
        <div className="flex items-center bg-white rounded-full p-4 shadow-lg">
          <FaCreditCard className="text-blue-500 text-3xl mr-2" />
          <span className="text-gray-800 font-semibold">Payment</span>
        </div>
        <div className="flex items-center bg-white rounded-full p-4 shadow-lg ml-4">
          <FaTicketAlt className="text-red-500 text-3xl mr-2" />
          <span className="text-gray-800 font-semibold">Tickets</span>
        </div>
        <div className="flex items-center bg-white rounded-full p-4 shadow-lg ml-4">
          <FaMoneyBill className="text-green-500 text-3xl mr-2" />
          <span className="text-gray-800 font-semibold">Money</span>
        </div>
      </div>
    </div>
  );
};

export default Icons;
