import React from 'react'
import { navLinks } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: "bottom top"
            }
        });

        navTween.fromTo("nav",
            {
                backgroundColor: "transparent"
            },
            {
                backgroundColor: "#00000050",
                duration: 1,
                ease: "power1.inOut"
            })
    }, [])
    const goTo = (path) => {
        gsap.to(window, { duration: 2, scrollTo: path, ease: "power1.out" });
    }

    return (
        <nav>
            <div>
                <a href='#home' className='flex items-center gap-2'>
                    <img src='/images/logo.png' alt='logo' />

                    <p>
                        Velvet Bar
                    </p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a className='cursor-pointer ' onClick={() => goTo(`#${link.id}`)}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
