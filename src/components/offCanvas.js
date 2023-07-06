import { NavLinks } from '@/const/navlinks'
import Link from 'next/link'
import React from 'react'

const OffCanvas = () => {
    return (
        <div className='container mx-auto px-4 z-50'>
            <ul className='grid gap-4'>
                {NavLinks?.map((item, id) => {
                    return <li key={id} >
                        <Link href={item.link} className='md:text-[40px] text-2xl Helvetica_Bold text-white hover:text-white/80'>
                            {item.name}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default OffCanvas