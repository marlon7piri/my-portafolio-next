import { useRouter } from 'next/navigation';
import React from 'react'

export const PrimaryButton = ({islink}) => {

  const router = useRouter();


  if(islink){
    return <a
    className=" w-max h-max text-complementario p-3 rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario mt-4"
    href={islink} target='_blank'
  >
    Ver Proyecto
  </a>
  }else{
    return <button
    className=" w-max h-max text-complementario p-3 rounded-md flex gap-2 justify-center items-center  shadow-inner shadow-complementario hover:scale-105 trasition duration-500 cursor-pointer hover:shadow-primario mt-4"
    onClick={() => router.back()}
  >
    Atras
  </button>
  }
  
}
