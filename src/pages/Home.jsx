import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";

function Home() {
    return (
        <div className="min-h-screen">
            {/* Background */}

            {/* Nav Bar */}
            <NavBar />
            {/* Main Content */}
            <Hero />
            <About />
            <Project />
            <Contact />
        </div>
    );
}

export default Home;