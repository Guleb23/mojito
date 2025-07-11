import React, { useRef, useState } from 'react'
import { sliderLists } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef(null);
    const allCocktails = sliderLists.length;

    useGSAP(() => {
        const tl = gsap.timeline();
        const split = new SplitText(".details", { type: "lines" })
        tl.fromTo("#title",
            {
                opacity: 0,
                x: -200,

            },
            {
                opacity: 1,
                duration: 1,
                x: 0
            }
        )
        gsap.fromTo(split.lines,
            {
                opacity: 0,
                x: 200,

            },
            {
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
                x: 0
            }
        )
        gsap.fromTo(".cocktail",
            {
                opacity: 0,
                x: -200,

            },
            {
                opacity: 1,
                duration: 1,
                x: 0
            })
    }, [currentIndex])


    const goToSlide = (index) => {
        const newIndex = (index + allCocktails) % allCocktails;
        setCurrentIndex(newIndex);
    }

    const getCocktail = (index) => {
        return sliderLists[(currentIndex + index + allCocktails) % allCocktails];
    }

    const currentCocktail = getCocktail(0);
    const prevCocktail = getCocktail(-1);
    const nextCocktail = getCocktail(1);


    return (
        <section id='menu' aria-labelledby='menu-heading' className='h-full overflow-hidden'>
            <img src='/images/slider-left-leaf.png' alt='left-leaf' id='m-left-leaf' />
            <img src='/images/slider-right-leaf.png' alt='right-leaf' id='m-right-leaf' />
            <h2 id='menu-heading' className='sr-only'>Cocktail menu </h2>
            <nav className='cocktail-tabs'>
                {sliderLists.map((cock, index) => {
                    const isActive = index === currentIndex
                    return (
                        <button key={cock.id} className={`${isActive ? "text-white border-white " : "text-white/50 border-white/50"}`}
                            onClick={() => {
                                goToSlide(index);
                            }}>
                            {cock.name}
                        </button>
                    )
                })}
            </nav>
            <div className='content'>
                <div className='arrows'>
                    <button className='text-left' onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src='/images/right-arrow.png' alt='r-arrow' />
                    </button>
                    <button className='text-left' onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src='/images/left-arrow.png' alt='l-arrow' />
                    </button>
                </div>
                <div className='cocktail'>
                    <img src={currentCocktail.image} className='object-contain' />
                </div>
                <div className='recipe'>
                    <div ref={contentRef} className='info'>
                        <p>Recipe for:</p>
                        <p id='title'>{currentCocktail.name}</p>

                    </div>
                    <div className='details'>
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
