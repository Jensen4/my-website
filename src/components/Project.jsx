import { FaLongArrowAltRight } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "TextSavvy",
        description: "A chrome extension to improve user accessibility features while surfing the internet.",
        image: "/projects/project1.png",
        tags: ["Java", "Javascript", "HTML", "CSS", "Cohere"],
        url: "https://devpost.com/software/textsavvy",
    },
    {
        id: 2,
        title: "TextSavvy",
        description: "A chrome extension to improve user accessibility features while surfing the internet.",
        image: "/projects/project1.png",
        tags: ["Java", "Javascript", "HTML", "CSS", "Cohere"],
        url: "https://devpost.com/software/textsavvy",
    },
]

function Project() {
    return (
        <section id="projects" className="relative py-24">
             <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-10 text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-gray-200 rounded-lg overflow-hidden shadow-m transition-scale-hover-2 hover:shadow-2xl">
                            <a className="hover:cursor-pointer" href={project.url} target="_blank">
                                <h3 className="text-xl text-center font-semibold m-2">{project.title}</h3>
                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                <div className="pt-4 px-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium text-white rounded-full bg-secondary">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="mx-2 mb-4 text-sm">{project.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-10">
                    <a className="flex flex-row items-center gap-2 justify-center transition-scale-hover hover:text-primary" href="/projects">
                        View all my projects
                        <FaLongArrowAltRight className="mt-1" />
                    </a>
                </div>
                
             </div>
        </section>
    )
}

export default Project;