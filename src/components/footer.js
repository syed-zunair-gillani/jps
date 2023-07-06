import React from 'react'
import InstaFeed from './instafeed'
import StayConected from './stay-conected'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer>
            <section className='bg-black pt-10 pb-16'>
                <StayConected />
            </section>
            <section className='bg-black py-16'>
                <div className='container mx-auto px-4'>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                        <div className='max-w-[296px]'>
                            <h3 className='text-3xl font-bold text-white Helvetica_Bold mb-5'>
                                Download my updates straight to your inbox.
                            </h3>
                            <form className='relative'>
                                <input placeholder='Email'
                                    className='text-base font-bold placeholder:text-white Helvetica_Bold bg-transparent w-full border border-white/70 rounded-[5px] py-[7px] px-[14px]' />
                                <button type='submit' className='text-base font-bold text-white Helvetica_Bold inline-block absolute top-1/2 right-4 transform -translate-y-1/2'>
                                    <BsArrowRightShort />
                                </button>
                            </form>
                        </div>
                        <div className='md:col-span-2 col-span-1 grid md:grid-cols-4 grid-cols-1'>
                            <div>
                                <h4 className='text-lg font-bold text-white Helvetica_Bold mb-7'>
                                    Text about the Creator
                                </h4>
                                <ul className='grid gap-5'>
                                    <li>
                                        <Link href="#" className='text-base font-bold text-white Helvetica_Bold'>
                                            Shop
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='text-base font-bold text-white Helvetica_Bold'>
                                            Search
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='text-base font-bold text-white Helvetica_Bold'>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='text-base font-bold text-white Helvetica_Bold'>
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='text-base font-bold text-white Helvetica_Bold mb-7'>
                                    Text about the site
                                </h4>
                                <ul className='grid gap-5'>
                                    <li>
                                        <Link href="#" className='text-base font-bold text-white Helvetica_Bold'>
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='text-base font-bold text-white Helvetica_Bold'>
                                            Search
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='text-base font-bold text-white Helvetica_Bold'>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='text-base font-bold text-white Helvetica_Bold'>
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white/60 h-[1px] w-full mt-10 mb-11'></div>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-7'>
                        <div className='md:col-span-2'>
                            <p className='text-sm font-bold text-white/60 Helvetica_Bold'>
                                © 2023 <Link href="#" target='_blank' rel='nofollow' className='text-white/60 hover:text-white'>JONATHAN PETERS.</Link> <Link href="#" target='_blank' rel='nofollow' className='text-white/60 hover:text-white'>Powered by Shopify</Link>
                            </p>
                        </div>
                        <div>
                            <ul className='flex flex-wrap gap-5 justify-end'>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt1.svg" alt='payment1' width={38} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt2.svg" alt='payment2' width={38} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt3.svg" alt='payment3' width={38} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt4.svg" alt='payment4' width={38} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt5.svg" alt='payment5' width={38} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt6.svg" alt='payment6' width={38} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt7.svg" alt='payment7' width={38} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt8.svg" alt='payment8' width={38} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt9.svg" alt='payment9' width={38} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt10.svg" alt='payment10' width={38} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/svgs/paymnt11.svg" alt='payment11' width={38} height={24} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black pt-10'>
                <InstaFeed />
            </section>
        </footer>
    )
}

export default Footer