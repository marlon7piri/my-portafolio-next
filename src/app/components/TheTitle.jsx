import React from 'react'

const TheTitle = ({texto,medium}) => {
  return <h1 className={medium ? 
     "text-complementario font-bold text-4xl mb-10 max-w-[90%]":"text-complementario font-bold text-4xl mb-10 max-w-[60%] p-4"}>{texto}</h1>
}


export default TheTitle
