import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
    return (
        <main>
            <Header />
            <section className='py-32'>
                <div className='max-w-[1000px] mx-auto px-4'>
                    <div className='mb-10'>
                        <h2 className='md:text-6xl text-3xl font-extrabold text-white Helvetica_Bold'>
                            Contact Us
                        </h2>
                    </div>
                    <div>
                        <form action="#" className="space-y-5">
                            <div>
                                <label htmlFor="name" className="hidden mb-2 text-sm font-medium text-white">Name</label>
                                <input type="name" id="name" className="block py-2 px-3 w-full text-sm font-bold text-white Helvetica_Bold bg-transparent border border-white shadow-sm focus:ring-white focus:border-white placeholder:text-white rounded-[7px] " placeholder="Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-white">Email</label>
                                <input type="email" id="email" className="block py-2 px-3 w-full text-sm font-bold text-white Helvetica_Bold bg-transparent border border-white shadow-sm focus:ring-white focus:border-white placeholder:text-white rounded-[7px] " placeholder="Email*" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="hidden mb-2 text-sm font-medium text-white">Phone Number</label>
                                <input type="tel" id="phone" className="block py-2 px-3 w-full text-sm font-bold text-white Helvetica_Bold bg-transparent border border-white shadow-sm focus:ring-white focus:border-white placeholder:text-white rounded-[7px] " placeholder="Phone Number" />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="hidden mb-2 text-sm font-medium text-white">Your message</label>
                                <textarea id="message" rows="5" className="block p-2.5 w-full text-sm font-bold text-white Helvetica_Bold bg-transparent shadow-sm border border-white focus:ring-white focus:border-white placeholder:text-white rounded-[7px] " placeholder="Comment*" required></textarea>
                            </div>
                            <button type="submit" className="text-sm font-bold text-[#011423] Helvetica_Bold uppercase bg-[#c63838] border border-[#c63838] hover:bg-white hover:border-transparent py-2 px-5 rounded-[7px] ">Send </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
