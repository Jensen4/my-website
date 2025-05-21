import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsList } from "react-icons/bs";

function NavBar() {
  return (
    <div className="flex md:items-center justify-between mx-10 mt-5">
        <a className="cursor-pointer" href="#">
        Jensen Sung
        </a>
        <ul className="hidden md:flex flex-row list-none gap-10 items-center">
            <li><a className="cursor-pointer" href="#about">About</a></li>
            <li><a className="cursor-pointer" href="#skills">Skills</a></li>
            <li><a className="cursor-pointer" href="#education">Education</a></li>
            <li><a className="cursor-pointer" href="#projects">Projects</a></li>
            <li><a className="cursor-pointer" href="#contact">Contact</a></li>
            <li><a className="cursor-pointer" href="https://github.com/Jensen4" target="_blank"><BsGithub className="scale-150" /></a></li>
            <li><a className="cursor-pointer" href="https://www.linkedin.com/in/jensen-sung-43097227a/" target="_blank"><BsLinkedin className="scale-150" /></a></li>
        </ul>
        <div className="relative flex md:hidden flex-col">
            <button>
                <BsList className="scale-150 absolute right-0" />
            </button>
            <ul className="flex flex-col gap-5 items-center mt-15 mr-5 text-[20px]">
                <li><a className="cursor-pointer" href="#about">About</a></li>
                <li><a className="cursor-pointer" href="#skills">Skills</a></li>
                <li><a className="cursor-pointer" href="#education">Education</a></li>
                <li><a className="cursor-pointer" href="#projects">Projects</a></li>
                <li><a className="cursor-pointer" href="#contact">Contact</a></li>
                <li><a className="cursor-pointer" href="https://github.com/Jensen4" target="_blank"><BsGithub className="scale-150 mt-2" /></a></li>
                <li><a className="cursor-pointer" href="https://www.linkedin.com/in/jensen-sung-43097227a/" target="_blank"><BsLinkedin className="mt-3 scale-150" /></a></li>
            </ul>
        </div>
    </div>
  );
}

export default NavBar;
