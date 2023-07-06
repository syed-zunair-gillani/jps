import Category_Box from '@/components/category-box'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { categories } from '@/const/category'
import React from 'react'

export default function Products() {
    return (
    <main>
        <Header />
        <section className='py-32'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-12'>
                {categories?.map((item, id) => {
                        return <Category_Box key={id} cate={item} />
                    })}
                    
                </div>
            </div>
        </section>
        <Footer />
    </main >
  )
}
