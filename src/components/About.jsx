function About() {
    return (
        <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5">
            <div className="container max-w-4xl mx-auto text-center">
                <div className="space-y-10">
                    <h1 className="text-[37px] md:text-[50px] font-bold">
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
            </div>
        </section>
    );
}

export default About;