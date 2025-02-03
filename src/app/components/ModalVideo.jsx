import React from 'react'



const ModalVideo = ({ url, onClick }) => {




  return (
    <div className={`bg-secundario z-[500] w-full h-full absolute top-0 left-0  flex justify-center items-center`} >
      <div className='bg-complementario p-10  flex justify-center items-center w-[calc(100%-300px)] relative min-h-[calc(100%-300px)]'>
        <button
          onClick={onClick}
          className='absolute w-10 h-10
        right-5 top-5 bg-secundario
         rounded-full 
        p-2 text-complementario font-bold flex justify-center items-center'><ion-icon name="close-outline" /></button>

        {!url ? <h1 className='text-secundario'>Cargando...</h1> : <video
          className='w-[calc(100%-100px)]'
          src={url}
          autoPlay
          controls />}

      </div>

    </div>
  )
}

export default ModalVideo
