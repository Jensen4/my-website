import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsList } from "react-icons/bs";

const navList = [
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
]

function NavBar() {
  return (
    <div className="flex md:items-center justify-between mx-10 mt-5">
        <a className="cursor-pointer" href="#">
        Jensen Sung
        </a>
        <ul className="hidden md:flex flex-row list-none gap-10 items-center">
            {navList.map((item, key) => (
                <li><a className="cursor-pointer" key={key} href={item.href}>{item.name}</a></li>   
            ))}
            <li><a className="cursor-pointer" href="https://github.com/Jensen4" target="_blank"><BsGithub className="scale-150" /></a></li>
            <li><a className="cursor-pointer" href="https://www.linkedin.com/in/jensen-sung-43097227a/" target="_blank"><BsLinkedin className="scale-150" /></a></li>
        </ul>
        <div className="relative flex md:hidden flex-col">
            <button>
                <BsList className="scale-150 absolute right-0" />
            </button>
            <ul className=" hidden flex flex-col gap-5 items-center mt-15 mr-5 text-[20px]">
                {navList.map((item, key) => (
                <li><a className="cursor-pointer" key={key} href={item.href}>{item.name}</a></li>   
            ))}
                <li><a className="cursor-pointer" href="https://github.com/Jensen4" target="_blank"><BsGithub className="scale-150 mt-2" /></a></li>
                <li><a className="cursor-pointer" href="https://www.linkedin.com/in/jensen-sung-43097227a/" target="_blank"><BsLinkedin className="mt-3 scale-150" /></a></li>
            </ul>
        </div>
    </div>
  );
}

export default NavBar;
