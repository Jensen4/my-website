import NavBar from "../components/NavBar";
import About from "../components/About";

function Home() {
    return (
        <div className="min-h-screen">
            {/* Background */}

            {/* Nav Bar */}
            <NavBar />
            {/* Main Content */}
            <About />
        </div>
    );
}

export default Home;