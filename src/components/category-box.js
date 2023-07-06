import { Products } from '@/const/products';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";

const Category_Box = ({ cate }) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id="cat_box">
            <Link href={cate?.link} className='text-lg font-extrabold text-[#f0b504] hover:opacity-70 underline Helvetica_Bold'>
                <div className='flex gap-2 mb-5 items-center'>
                    <Image src={cate.img} alt='image' height={1939} width={1718} className='h-10 w-10 object-contain rounded-full' />
                    <span className='text-lg font-extrabold text-[#f0b504] hover:opacity-70 underline Helvetica_Bold '>
                        {cate?.name}
                    </span>
                </div>
            </Link>
            <div className='relative max-w-[330px] mx-auto bg-[#101010] pb-16 rounded-2xl'>
                <div className='bg-black rounded-[7px] p-2 absolute top-4 right-4 z-[10]'>
                    <span className='text-lg font-extrabold text-white Helvetica_Bold'>
                        7/7
                    </span>
                </div>
                <Slider {...settings}>
                    {Products?.slice(1).map((item, id) => {
                        return <div key={id} className='w-[330px] h-[330px] rounded-2xl'>
                            <Image src={item.img} alt='mug.jpg' height={1939} width={1718} className='rounded-tr-2xl rounded-tl-2xl' />
                        </div>
                    })}

                </Slider>
                <div className='absolute bottom-24 left-5'>
                    <Link href={cate.link}
                        className='text-base font-bold text-[#011423] Helvetica_Bold uppercase bg-[#c63838] border border-[#c63838] hover:bg-white hover:border-transparent w-full py-3 px-[14px] rounded-[7px] hover:shadow'>
                        View the collection
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Category_Box