import { IoIosArrowDown } from "react-icons/io";

function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-5">
            <div className="container max-w-4xl mx-auto my-auto text-center">
                <div className="space-y-5">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        <span className="inline-block opacity-0 animate-fade-in">Hi,</span>
                        {" "}
                        <span className="inline-block opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>I'm</span>
                        {" "}
                        <span className="inline-block opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>Jensen!</span>
                    </h1>
                    <p className="opacity-0 animate-fade-in" style={{animationDelay: '0.9s'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam doloremque, suscipit rem consectetur eum aperiam minus necessitatibus? Facere, sint!
                    </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-12 justify-center animate-bounce">
                    <a className="flex flex-col items-center space-y-1 hover:cursor-pointer transition duration-500 hover:text-primary" href="#projects">
                        <p>View My Projects</p>
                        <IoIosArrowDown />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;