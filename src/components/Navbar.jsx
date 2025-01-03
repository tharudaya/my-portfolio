import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const hanldeLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    }

    return (
        <div>
            <nav className="fixed left-0 right-0 top-4 z-50">
                <div className="mx-auto hidden max-w-lg items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
                    <div className="flex items-center justify-between gap-6">
                        <ul className="flex items-center gap-4">
                            {
                                NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} className="text-sm hover:text-yellow-400" onClick={(e) => hanldeLinkClick(e, item.href)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="rounded-lg lg:hidden">
                    <div className="flex items-center justify-end pr-2">
                        <div className="flex items-center">
                            <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                                {
                                    isMobileMenuOpen ? (
                                        <FaTimes className="m-2 h-6 w-5" />
                                    ) : (
                                        <FaBars className="m2
                                        h-6 w-5" />
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    {
                        isMobileMenuOpen && (
                            <ul className="flex flex-col gap-4 p-4 backdrop-blur-3xl">
                                {
                                    NAVIGATION_LINKS.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href} className="block w-full text-lg" onClick={(e) => hanldeLinkClick(e, item.href)}>
                                                {item.label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar