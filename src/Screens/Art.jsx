import React from 'react'
import { featureLists, goodLists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    useGSAP(() => {
        const start = isMobile ? "top 20%" : "top top";


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start: start,
                end: "bottom center",
                scrub: 1.5,
                pin: true
            }
        })

        tl.to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" });

        tl.to(".masked-img", { scale: 1.3, maskPosition: "center", maskSize: "400%", duration: 1.5, ease: "power1.inOut" })

        tl.to("#masked-content", { opacity: 1, duration: 1, stagger: 0.2, ease: "power1.inOut" })
    }, [])

    return (
        <section id='art'>
            <div className='container mx-auto h-full pt-20'>
                <h2 className='will-fade'> THE ART</h2>
                <div className='content'>
                    <ul className='space-y-4 will-fade'>
                        {goodLists.map((item, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <img src='/images/check.png' />
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='cocktail-img'>
                        <img src='/images/under-img.jpg' className='abs-center masked-img size-full object-contain' />
                    </div>
                    <ul className='space-y-4 will-fade'>
                        {featureLists.map((item, index) => (
                            <li key={index} className='flex items-center justify-start gap-2'>
                                <img src='/images/check.png' />
                                <p className='md:w-fit w-60'>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='masked-container'>
                    <h2 className='will-fade'>Sip-worthy Perfection</h2>
                    <div id='masked-content'>
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This is not a drink, it is a carefully crafted moment made just for you</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Art
