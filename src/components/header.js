import React, { useState } from 'react';
import { HiOutlineUser, HiOutlineMenu, HiOutlineShoppingBag } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import OffCanvas from './offCanvas';
import Link from 'next/link';

const Header = () => {
    const [canvas, setCanvas] = useState(false);

    return (
        <>
            <header className='bg-black py-3 md:min-h-[88px] min-h-[48px] grid items-center fixed top-0 left-0 right-0 z-50'>
                <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-3 items-center '>
                    <div>
                        {
                            canvas ? (
                                <IoMdClose onClick={() => { setCanvas(!canvas) }} className='text-white w-6 h-6 cursor-pointer' />
                            ) : (
                                <HiOutlineMenu onClick={() => { setCanvas(!canvas) }} className='text-white w-6 h-6 cursor-pointer' />
                            )
                        }
                    </div>
                    <div className='md:col-span-2 text-center'>
                        <Link href="/">
                            <span className='text-white md:text-xl text-sm leading-none font-extrabold text-center Helvetica_Bold'>
                                JONATHAN PETERS
                            </span>
                        </Link>
                    </div>
                    <div className='flex justify-end gap-6'>
                        <HiOutlineUser className='text-white w-6 h-6' />
                        <HiOutlineShoppingBag className='text-white w-6 h-6' />
                    </div>
                </div>
            </header>
            <section className={`bg-black fixed md:top-[76px] top-[72px] left-0 grid items-center py-6 transition ease-in-out z-50  ${!canvas ? 'hidden w-0 ' : 'block w-full '}`}>
                <OffCanvas />
            </section>
        </>
    )
}

export default Header
