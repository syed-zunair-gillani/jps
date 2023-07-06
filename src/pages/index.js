import Events from '@/components/events'
import Featered_Product from '@/components/featured-product'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Main_Banner from '@/components/main-banner'
import Related_Product from '@/components/related-product'
import { Products } from '@/const/products'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Header />
      <Main_Banner />
      <section className='bg-black py-16'>
        <div className='container mx-auto px-4 w-full grid gap-16'>
          {Products?.slice(0, 2).map((item, id) => {
            return <Featered_Product
              key={id}
              product={item}
            />
          })}
        </div>
      </section>
      <section className='bg-black py-16'>
        <div className='container mx-auto px-4 w-full flex md:flex-row flex-col gap-7'>
          <div className='md:w-1/4 w-full'>
            <div className='max-w-[243px] md:h-[390px] h-[410px] mx-auto border border-white/40 rounded-2xl relative'>
              <div className='px-5 max-w-[243px] text-center bg-black rounded-[30px] absolute top-[-1px] bottom-[-1px] left-[-1px] right-[-1px]'>
                <Image src="/images/ticket.jpg" alt='ticket' height={1939} width={1718} className='max-w-[156px] mx-auto mb-6 rounded-2xl' />
                <h2 className='text-3xl font-extrabold text-white Helvetica_Bold text-center mb-14'>
                  JP Merchandise
                </h2>
                <Link href="#" className='text-base font-bold text-[#011423] Helvetica_Bold uppercase bg-white hover:text-white hover:bg-transparent w-full py-3 px-[14px] rounded-[7px] '>
                  Shop now
                </Link>
              </div>
            </div>
          </div>
          <div className='md:w-3/4 w-full  grid md:grid-cols-3 grid-cols-1 gap-7'>
            {Products?.slice(2, 5).map((item, id) => {
              return <Related_Product
                key={id}
                product={item}
              />
            })}
          </div>
        </div>
      </section>
      <section className='bg-black py-16'>
        <div className='container mx-auto px-4'>
          <div>
            <h2 className='text-xl font-extrabold text-white Helvetica_Bold text-center mb-8'>
              UPCOMING EVENTS
            </h2>
          </div>
          <div className='w-full flex md:flex-row flex-col justify-center gap-7'>
            <div className='md:w-5/12 w-full'>
              <Image src="/images/d.png" alt="image" height={1939} width={1718} className='max-w-[364px] md:ml-auto w-full h-full' />
            </div>
            <div className='md:w-7/12 w-full'>
              <Events />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
