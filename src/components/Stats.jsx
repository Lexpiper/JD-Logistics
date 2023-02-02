import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  return (
    <div className='flex items-center  w-full md:w-fit gap-8 mt-20'>
        {
            stats.map((stat) => (
                <div className='flex flex-col items-center '>
                    <span  className='font-extrabold text-2xl'>{stat.value}</span>
                    <span className='text-sm'>{stat.title}</span>
                </div>
            ))
        }

    </div>
  )
}

export default Stats