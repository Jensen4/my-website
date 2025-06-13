import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { cn } from "../lib/utils";

const navList = [
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
]

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <nav className="flex md:items-center justify-between mx-10 mt-5">
        <a className="cursor-pointer" href="#">
        <span className="">
            Jensen Sung
        </span>
        </a>

        {/* Desktop Navbar */}
        <div className="hidden md:flex flex-row list-none space-x-10 items-center">
            {navList.map((item, key) => (
                <a className="cursor-pointer text-black hover:text-secondary transition-colours duration-500" key={key} href={item.href}>{item.name}</a>   
            ))}
            <a className="cursor-pointer" href="https://github.com/Jensen4" target="_blank"><BsGithub className="scale-150" /></a>
            <a className="cursor-pointer" href="https://www.linkedin.com/in/jensen-sung-43097227a/" target="_blank"><BsLinkedin className="scale-150" /></a>
        </div>

        {/* Mobile Navbar */}

        <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            { isMenuOpen ? <AiOutlineClose className="scale-150" /> : <BsList className="scale-150" /> }
        </button>

        <div className={cn("fixed inset-0 bg-black/15 backdrop-blur-md flex flex-col items-center justify-center",
                            "transition-all duration-500 z-40 md:hidden",
                            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            )}>
            <div className="flex flex-col space-y-10 text-[30px]">
                {navList.map((item, key) => (
                <a className="cursor-pointer text-center text-black hover:text-secondary transition-colours duration-500" onClick={() => setIsMenuOpen(false)} key={key} href={item.href}>{item.name}</a>
            ))}
            </div>
        </div>
    </nav>
    );
}

export default NavBar;
