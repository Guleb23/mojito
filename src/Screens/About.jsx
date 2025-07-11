import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { SplitText } from 'gsap/all'
const About = () => {

    useGSAP(() => {

        const mainHeader = new SplitText('#main-header', { type: "lines" });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 50%",
            }
        });

        tl.fromTo(mainHeader.lines,
            {
                x: -100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.in",
                stagger: 0.2
            })
        tl.fromTo(".cards",
            {
                x: -200,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.in",
                stagger: 0.2
            })
    }, [])

    return (
        <div id='about'>
            <div className='mb-16 md:px-0 px-5'>
                <div className='content'>
                    <div className='md:col-span-8'>
                        <p className='badge'> Best Cocktails</p>
                        <h2 id='main-header'>Where every detail matters
                            <span className='text-white'>-</span>
                            from muddle to garnish
                        </h2>
                    </div>
                    <div className='sub-content'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quisquam exercitationem iure esse deleniti ipsum fuga, vel excepturi perspiciatis soluta voluptatem beatae maxime dolorem
                        </p>
                        <div>
                            <p className='md:text-3xl text-xl font-bold'>
                                <span>4.5</span>/5
                            </p>
                            <p className='text-sm text-white-100'>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='top-grid'>
                <div className='md:col-span-3 cards'>
                    <div className='noisy' />
                    <img src='/images/abt1.png' alt='image' />
                </div>
                <div className='md:col-span-6 cards'>
                    <div className='noisy' />
                    <img src='/images/abt2.png' alt='image' />
                </div>
                <div className='md:col-span-3 cards'>
                    <div className='noisy' />
                    <img src='/images/abt5.png' alt='image' />
                </div>

            </div>
            <div className='bottom-grid'>
                <div className='md:col-span-8 cards'>
                    <div className='noisy' />
                    <img src='/images/abt3.png' alt='image' />
                </div>
                <div className='md:col-span-4 cards'>
                    <div className='noisy' />
                    <img src='/images/abt4.png' alt='image' />
                </div>
            </div>
        </div>
    )
}

export default About
