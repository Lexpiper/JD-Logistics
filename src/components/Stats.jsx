import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  return (
    <div className='flex items-center w-fit gap-5 mt-5'>
        {
            stats.map((stat) => (
                <div className='flex flex-col items-center '>
                    <span  className='font-extrabold text-lg'>{stat.value}</span>
                    <span className='text-sm'>{stat.title}</span>
                </div>
            ))
        }

    </div>
  )
}

export default Stats