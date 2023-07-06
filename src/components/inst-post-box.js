import Image from 'next/image'
import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'

const InsPost_box = ({ imag, }) => {
    return (
        <div className='rounded-[16px] max-w-[213.16px] max-h-[213.16px] mt-5 relative group scale-100 hover:scale-110 transition-all'>
            <Image
                src={imag.img}
                alt='post'
                height={250}
                width={250}
                className='rounded-[16px] w-full h-full ' />
            <div className='absolute top-0 bg-black/40 h-full w-full hidden group-hover:flex rounded-[16px] justify-center items-center'>
                <AiOutlineInstagram color='#fff' size={24} />
            </div>
        </div>
    )
}

export default InsPost_box