import Image from 'next/image'
import React from 'react'
import Pay_icon from '../../public/svgs/paybtn.svg'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Featered_Product = ({ product }) => {
    return (
        <div className='container mx-auto px-4 flex md:flex-row flex-col md:gap-0 gap-7 w-full'>
            <div className='md:w-7/12 w-full'>
                <div className='bg-white rounded-[16px] sticky top-[120px] py-0 md:px-24 px-0'>
                    <Image src={product?.img}
                        alt='feature'
                        width={360}
                        height={340}
                        className='object-contain object-center w-full h-[60%]' />
                </div>
            </div>
            <div className='md:w-5/12 w-full md:pl-28 pl-0'>
                <h2 className='md:text-6xl text-3xl font-extrabold text-white Helvetica_Bold'>
                    {product?.name}
                </h2>
                <p className='text-base font-extrabold text-white Helvetica_Bold mt-3'>
                    ${product?.price} USD
                </p>
                {
                    product.shortdesc ? (
                        <p className='text-base font-extrabold text-white Helvetica_Bold mt-10'>
                            {product?.shortdesc} <span><Image src={Pay_icon} alt="paybtn" className='inline-block' /> </span> <button className='underline'>
                                Learn more
                            </button>
                        </p>
                    ) : ""
                }

                <form className='mt-5'>
                    <p className='text-lg font-extrabold text-white Helvetica_Bold'>
                        QUANTITY
                    </p>
                    <div className='relative max-w-[105px] my-6'>
                        <button className='text-base font-bold text-white Helvetica_Bold inline-block absolute top-1/2 left-4 transform -translate-y-1/2'>
                            <AiOutlineMinus size={14} />
                        </button>
                        <input placeholder='1'
                            className='text-base font-bold text-center placeholder:text-white Helvetica_Bold bg-transparent w-full border border-white rounded-[7px] py-[7px] px-[14px]' />
                        <button className='text-base font-bold text-white Helvetica_Bold inline-block absolute top-1/2 right-4 transform -translate-y-1/2'>
                            <AiOutlinePlus size={14} />
                        </button>
                    </div>
                    <button type='submit' className='text-base font-bold text-[#f0b504] Helvetica_Bold uppercase bg-transparent border border-[#f0b504] hover:text-[#011423] hover:bg-white hover:border-transparent w-full py-3 px-[14px] rounded-[7px] '>
                        Add to cart
                    </button>
                    <button className='text-base font-bold text-white Helvetica_Bold uppercase bg-[#5a31f4] border border-[#5a31f4] hover:bg-[#3c0def] hover:border-[#3c0def] w-full py-3 px-[14px] rounded-[7px] mt-2 items-center'>
                        Buy now with <span><Image src={Pay_icon} alt="paybtn" className='inline-block' /></span>
                    </button>
                    <button className='text-base font-bold text-white Helvetica_Bold uppercase border-b border-[#f0b504] mt-4'>
                        More payment options
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Featered_Product