import { useRouter } from 'next/navigation';
import React from 'react'

export const PrimaryButton = ({islink}) => {

  const router = useRouter();


  if(islink){
    return <a
    className=" mt-10 block w-max px-3 py-2 text-sm font-medium  bg-complementario rounded-md hover:bg-gray "
    href={islink} target='_blank'
  >
    Ver Proyecto
  </a>
  }else{
    return <button
    className=" px-3 py-2 text-sm font-medium  bg-complementario rounded-md hover:bg-gray "
    onClick={() => router.back()}
  >
    Atras
  </button>
  }
  
}
