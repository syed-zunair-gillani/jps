import Image from 'next/image'
import React from 'react'
import Pay_icon from '../../../public/svgs/paybtn.svg'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineReload } from 'react-icons/ai'
import { Products } from '@/const/products'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Related_Product from '@/components/related-product'

export default function Single() {
    return (
        <main>
            <Header />
            <section className='py-32'>
                {Products?.slice(0, 1).map((product, id) => {
                    return <div key={id} className='container mx-auto px-4 flex md:flex-row flex-col md:gap-0 gap-7 w-full'>
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
                            <p className='text-lg font-extrabold text-white Helvetica_Bold mt-3 flex gap-2'>
                                <AiOutlineReload strokeWidth={40} /> Delivery every 30 Days
                            </p>
                            <p className='text-lg font-extrabold text-white Helvetica_Bold mt-3'>
                                Subscription details
                            </p>
                            {
                                product?.shortdesc ? (
                                    <p className='text-base font-extrabold text-white Helvetica_Bold mt-10'>
                                        {product?.shortdesc} <span><Image src={Pay_icon} alt="paybtn" className='inline-block' /> </span> <button className='underline'>
                                            Learn more
                                        </button>
                                    </p>
                                ) : ""
                            }

                            <form className='my-5'>
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
                            <p className='text-base font-extrabold text-white Helvetica_Bold mt-3'>
                                ${product?.desc} USD
                            </p>
                            <div className="grid divide-y divide-white border-y border-white max-w-xl mx-auto mt-5">
                                <div className="py-5">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white">
                                            <span> Material</span>
                                            <span className="transition block group-open:hidden">
                                                <AiOutlinePlus />
                                            </span>
                                            <span className="transition hidden group-open:block">
                                                <AiOutlineMinus />
                                            </span>
                                        </summary>
                                        <p className="text-white mt-3 group-open:animate-fadeIn">
                                            Information about the material
                                        </p>
                                    </details>
                                </div>
                                <div className="py-5">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white">
                                            <span> Sizing</span>
                                            <span className="transition block group-open:hidden">
                                                <AiOutlinePlus />
                                            </span>
                                            <span className="transition hidden group-open:block">
                                                <AiOutlineMinus />
                                            </span>
                                        </summary>
                                        <p className="text-white mt-3 group-open:animate-fadeIn">
                                            Information about the sizing
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div>
                        <h2 className='text-xl font-extrabold text-white Helvetica_Bold text-center mb-10'>
                            YOU MIGHT ALSO LIKE
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-7 h-[386px]'>
                        {Products?.slice(1, 6).map((item, id) => {
                            return <Related_Product
                                key={id}
                                product={item}
                            />
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
