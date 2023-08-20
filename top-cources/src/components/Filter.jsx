import React from 'react'

const Filter = ({filterData}) => {

   
  return (
    <div className='flex w-full items-center justify-center mt-[1rem]'>
      {filterData.map ((data) => {
        return(
          <button key={data.id} className=' p-[7px] bg-[#22223b] text-white  rounded-lg mr-9 font-bold hover:bg-opacity-50 duration-300 transition-all mb-4'>
            {data.title}
            </button>
        )
      }

      )}
    </div>
  )
}

export default Filter




