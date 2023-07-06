import { SocialLinks } from '@/const/socials'
import Link from 'next/link'
import React from 'react'

const StayConected = () => {
  return (
    <div className='container mx-auto max-w-[650px] px-4'>
      <h3 className='text-3xl font-bold text-white Helvetica_Bold text-center mb-7'>
        Stay connected
      </h3>
      <div>
        <ul className='grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-4'>
          {SocialLinks?.map((item, id) => {
            return <li key={id} >
              <Link href="#" target='_blank'
                className='text-sm py-3 px-[14px] font-bold text-[#011423] Helvetica_Bold uppercase text-center justify-center bg-[#c63838] hover:bg-white rounded-[7px] flex'>
                {item.name}
              </Link>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default StayConected