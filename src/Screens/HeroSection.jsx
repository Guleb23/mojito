import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const HeroSection = () => {
    const videoRef = useRef(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });



    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: "chars, words" });

        const paragrhSplit = new SplitText('.subtitle', { type: "lines" });

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
        gsap.fromTo(
            heroSplit.chars,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2
            }
        );
        gsap.fromTo(paragrhSplit.lines,
            {

                x: 200,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
                ease: "power1.in",
                delay: 0.5
            }
        );

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: "top top",
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0);
        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : 'bottom top';

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            });
        };

    }, [])
    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>MOJITO</h1>
                <img
                    src='/images/hero-left-leaf.png'
                    alt='left-leaf'
                    className='left-leaf' />
                <img
                    src='/images/hero-right-leaf.png'
                    alt='right-leaf'
                    className='right-leaf' />

                <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block'>
                            <p>
                                COOL. CRISP. CLASSIC
                            </p>
                            <p className='subtitle'>
                                Sip the spirit <br /> of Summer
                            </p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni exercitationem numquam
                            </p>
                            <a href='#cocktails'>View cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    src="/videos/output.mp4"
                />
            </div>
        </>
    )
}

export default HeroSection
