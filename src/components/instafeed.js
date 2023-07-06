import React from 'react'
import InsPost_box from './inst-post-box'
import { InstaFeed_Data } from '@/const/instafeed-data'
import Link from 'next/link'

const InstaFeed = () => {
    return (
        <div className='container mx-auto px-4'>
            <h3 className='text-2xl font-bold text-white Helvetica_Bold text-center mb-5'>
                FIND ME ON INSTAGRAM @djjonathanpeters
            </h3>
            <div className='grid md:grid-cols-6 grid-cols-2 gap-4'>
                {InstaFeed_Data.map((item, index) => {
                    return <InsPost_box imag={item} key={index} />
                })}
            </div>
            <div className='p-5'>
                <p className='text-xs font-bold text-white Helvetica_Bold text-center'>
                    Powered By <Link href="https://shopifyapps.eshopbrands.io/apps/instafeed-instagram-feed-story"
                        target='_blank'
                        className='text-[#f0b504] hover:opacity-70 underline'>
                        Instagram Feed + Stories
                    </Link>.
                </p>
            </div>
        </div>
    )
}

export default InstaFeed