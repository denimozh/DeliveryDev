import React from 'react'

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] pt-20">
      <table className="w-full border-separate border-spacing-3 bg-red-500 p-6 rounded-xl shadow-2xl">
        <thead>
          <tr className="text-left text-white">
            <th className="hidden md:block text-white">Order ID</th>
            <th className='text-white'>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className=''>
          <tr className="text-sm md:text-base bg-red-200 ">
            <td className="hidden md:block py-6 px-1 font-bold">1237861238721</td>
            <td className="py-6 px-1 rounded-xl">19.07.2023</td>
            <td className="py-6 px-1 rounded-xl">89.90</td>
            <td className="hidden md:block py-6 px-1 rounded-xl">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1 rounded-xl">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-red-400 bg-red-200">
            <td className="hidden md:block py-6 px-1 font-bold">1237861238721</td>
            <td className="py-6 px-1 rounded-xl">19.07.2023</td>
            <td className="py-6 px-1 rounded-xl">89.90</td>
            <td className="hidden md:block py-6 px-1 rounded-xl">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1 rounded-xl">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-red-400">
            <td className="hidden md:block py-6 px-1 font-bold">1237861238721</td>
            <td className="py-6 px-1 rounded-xl">19.07.2023</td>
            <td className="py-6 px-1 rounded-xl">89.90</td>
            <td className="hidden md:block py-6 px-1 rounded-xl">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1 rounded-xl">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;