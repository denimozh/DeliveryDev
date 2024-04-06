"use client"
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const DeleteButton = ({id}:{id:string}) => {

  const {data:session, status} = useSession()
  const router = useRouter()

  if(status === "loading"){
    return <p>Loading...</p>
  }

  if(status === "unauthenticated" || !session?.user.isAdmin){
    return;
  }

  const handleDelete = async () => {
    const res = await fetch(`https://ramen-dev.vercel.app/api/products/${id}`, {
        method:"DELETE"
    })

    if(res.status === 200){
        router.push("/menu")
        toast("Product has been deleted!")
    } else {
        const data = await res.json()
        toast.error(data.message);
    }
  }
  return (
    <button className="bg-red-400 p-2 rounded-full absolute top-14 right-40" onClick={handleDelete}>
        <DeleteIcon sx={{ fontSize: 40, color:grey[50] }}/>
    </button>
  )
}

export default DeleteButton