import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'

export default function About_Us() {
    return (
        <main>
            <Header />
            <section className='py-32'>
                <div className='max-w-[1000px] mx-auto px-4'>
                    <div className='mb-10'>
                        <h2 className='md:text-6xl text-3xl font-extrabold text-white Helvetica_Bold'>
                            About
                        </h2>
                        <Image src="/images/author.png" alt='author' height={600} width={600} className='mx-auto' />
                    </div>
                    <div>
                        <p className='text-base font-bold text-white Helvetica_Bold mb-3'>
                            Jonathan Peters, fuelled by an unquenchable ardor for music and artistic expression, emerged in New York City’s vibrant dance club and nightlife milieu. He found himself captivated by the transformative power of music, inspiring others and being inspired in turn. Enchanted by the emotional odyssey a DJ could orchestrate through sound, Peters committed to mastering the art of DJing himself.
                        </p>
                        <p className='text-base font-bold text-white Helvetica_Bold mb-3'>
                            Swiftly cementing a reputable identity, Peters held an array of residencies across the city, at renowned venues including Save the Robots, Nell's, Mirage, Tattoo, and Cafe Society. After over a decade and a half of demonstrating his talents in NYC, he was invited to become the resident DJ at the Soundfactory, taking the reins from esteemed predecessors Frankie Knuckles and Jr Vasquez. For seven years, he presided over Saturday night sessions, drawing crowds of up to 3,000 weekly and 7,000 for special events. Following the closure of Soundfactory, Peters continued his trajectory with further residencies at Spirit NYC and Pacha NYC, solidifying his status as a cornerstone of New York City nightlife. His talents didn't go unnoticed; in 2006, DJ Times Magazine named him the #1 DJ in America.
                        </p>
                        <p className='text-base font-bold text-white Helvetica_Bold mb-3'>
                            Peters went on to establish Deeper Rekords, an influential and trailblazing record label. After the triple platinum remix success of Whitney Houston's "My Love Is Your Love," he cemented his status as one of the industry's most in-demand remixers. Peters has lent his unique touch to a multitude of high-profile artists, such as Whitney Houston, Bob Marley, Donna Summer, Chaka Khan, Janet Jackson, Mary J Blige, Deborah Cox, DMX, Garth Brooks, Brain McKnight, Kelly Price, Rihanna, George Micheal, Montell Jorden, Christina Aguilera, Ricky Martin, and many more, producing club mixes resonating globally.
                        </p>
                        <p className='text-base font-bold text-white Helvetica_Bold mb-3'>
                            Building on his successful career, in 2020, Peters embraced the digital age and launched a weekly livestream. This platform enabled him to connect with his audience on a more personal and immediate level, despite physical distances. This innovative move was not only a testament to his adaptability but also an affirmation of his commitment to his audience. Each week, he presents a marathon set lasting over 8 hours, delivering a diverse mix of tunes that has kept his subscribers enthralled and coming back for more.
                        </p>
                        <p className='text-base font-bold text-white Helvetica_Bold mb-3'>
                            His livestream has been nothing short of phenomenal, attracting an ever-growing audience of loyal followers and new fans alike. It has become a global phenomenon, with fans tuning in from all corners of the world, uniting people through the universal language of music. The sessions not only provide a platform for Peters to showcase his unparalleled DJing skills but also help foster a sense of community among his followers. They interact, engage, and celebrate their shared passion for music, which has only strengthened during these livestream events.
                        </p>
                        <p className='text-base font-bold text-white Helvetica_Bold mb-3'>
                            Jonathan's adaptability to the digital landscape has also seen him breaking boundaries and pushing the limits of what a DJ can do with music in a livestream setting. He meticulously curates his sets, introducing fresh tracks and remixes while interweaving classic favorites, all designed to keep the energy high and the listeners entranced. The success of his livestream is a testament to his enduring relevance and continuous evolution as an artist.
                        </p>
                        <p className='text-base font-bold text-white Helvetica_Bold'>
                            Peters' weekly livestream has not only further elevated his status in the music scene but also redefined how music is shared and enjoyed in the digital age, demonstrating the lasting power of his artistry and influence.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
