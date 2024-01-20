"use client"
import { OrderType } from '@/Types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
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
  });

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn:({id, status}:{id:string, status:string})=>{
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method:"PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(status)
      });
    },
    onSuccess(){
      queryClient.invalidateQueries({queryKey:["orders"]});
    }
  })

  const handleUpdate = (e:React.FormEvent<HTMLFormElement>, id:string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement
    const status = input.value;

    mutation.mutate({id, status})
  };

  if(isLoading || status==="loading") return "Loading...";

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] pt-20">
      <table className="w-full border-separate border-spacing-3 bg-red-400 p-6 rounded-xl shadow-2xl">
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
              <td className="hidden md:block py-6 px-1 rounded-xl">{item.products[0].title}</td>
              {session?.user.isAdmin ? (
                <td>
                  <form className='flex items-center justify-center gap-4' onSubmit={(e)=>handleUpdate(e, item.id)}>
                    <input placeholder={item.status} className='p-2 ring-1 ring-red-100 rounded-md'/>
                    <button className='bg-red-400 p-2 rounded-full'><Image src="/edit.png" alt="" width={20} height={20}/></button>
                  </form>
                </td>
              ) : (
                <td className="py-6 px-1 rounded-xl">{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;