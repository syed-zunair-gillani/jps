import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Related_Product = ({product}) => {
    return (
        <div className='md:h-[360px] h-[410px] w-full relative'>
            <Link href="#">
                <div className='group relative'>
                    <Image src={product?.img} alt='ticket' height={1939} width={1718} className='w-full rounded-2xl absolute top-0 block group-hover:hidden' />
                    <Image src={product?.img_hovr} alt='ticket' height={1939} width={1718} className='w-full rounded-2xl absolute top-0 hidden group-hover:block' />
                </div>
            </Link>
            <div className='absolute bottom-0 mb-4 mt-5'>
                <h2 className='text-base font-extrabold text-white Helvetica_Bold'>
                    {product?.name}
                </h2>
                <p className='text-sm font-extrabold text-white Helvetica_Bold'>
                   {product?.price}
                </p>
            </div>
        </div>
    )
}

export default Related_Product