"use client"
import { OrderType } from '@/Types';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

const OrdersPage = () => {

  const {data:session, status}=useSession()

  const router = useRouter()

  if(status==="unauthenticated"){
    router.push("/");
  }
  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => fetch('http://localhost:3000/api/orders').then((res) => res.json(),
    )
  })

  if(isLoading || status==="loading") return "Loading...";
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
          {data.map((item: OrderType)=>(
            <tr className="text-sm md:text-base bg-red-200 " key={item.id}>
              <td className="hidden md:block py-6 px-1 font-bold">{item.id}</td>
              <td className="py-6 px-1 rounded-xl">{item.createdAt.toString().slice(0, 10)}</td>
              <td className="py-6 px-1 rounded-xl">{item.price}</td>
              <td className="hidden md:block py-6 px-1 rounded-xl">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
              <td className="py-6 px-1 rounded-xl">On the way (approx. 10min)...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;