function About() {
    return (
        <section id="about" className="relative py-15 px-10">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl font-bold text-center">
                    About Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center mt-15 text-center lg:mx-20">
                    <img className="border-2 aspect-square rounded-full object-cover bg-gray-200/50 " src="" alt="Portrait" />
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold">
                            Backend Developer
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dolore quis quidem nihil recusandae eligendi dolor. Ab facilis itaque amet aspernatur doloribus non tempore quas! Mollitia voluptates non repellat a?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolore corrupti quaerat distinctio quisquam! Harum praesentium ab fugiat? Soluta, quia?
                        </p>
                        <span className="flex flex-col md:flex-row gap-5 mt-8">
                            <a href="#contact" className="mx-auto px-6 py-2 border-2 border-transparent rounded-full bg-primary text-white hover:cursor-pointer transition-scale-hover">
                                Get In Touch
                            </a>
                            <a href="/Resume.pdf" target="_blank" className="mx-auto px-6 py-2 border-2 rounded-full hover:cursor-pointer transition-scale-hover">
                                View my Resume
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;