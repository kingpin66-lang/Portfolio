import { motion } from "framer-motion";

import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

import novamart from "../assets/projects/novamart.png";
import corporate from "../assets/projects/corporate.png";
import dashboard from "../assets/projects/dashboard.png";

const projects = [
    {
        title: "NovaMart",
        image: novamart,

        description:
            "A full stack MERN E-Commerce platform featuring authentication, Cloudinary image uploads, shopping cart, orders, admin dashboard and search functionality.",

        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Cloudinary",
            "Tailwind",
        ],

        github: "https://github.com/kingpin66-lang/",

        live: "https://novamart-tan.vercel.app/",

        featured: true,
    },

    // {
    //     title: "Corporate FrontEnd",

    //     image: corporate,

    //     description:
    //         "Design of a Corporate website using React and tailwind",

    //     technologies: [
    //         "React",
    //         "Tailwind Css",
    //     ],

    //     github: "https://github.com/kingpin66-lang/",

    //     live: "#",
    // },

    // {
    //     title: "Next.js Dashboard",

    //     image: dashboard,

    //     description:
    //         "Responsive dashboard built using Next.js with reusable UI components.",

    //     technologies: [
    //         "Next.js",
    //         "Tailwind",
    //         "React",
    //     ],

    //     github: "https://github.com/YOUR_USERNAME",

    //     live: "#",
    // },
];

function ProjectCard({ project }) {
    return (
        <motion.div
            whileHover={{
                y: -10,
            }}
            className="overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition duration-300"
        >
            <div className="overflow-hidden">

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover hover:scale-110 duration-500"
                />

            </div>

            <div className="p-8">

                <h2 className="text-3xl font-bold">
                    {project.title}
                </h2>

                <p className="text-gray-400 mt-4 leading-8">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}

                </div>

                <div className="flex gap-4 mt-8">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-slate-800 hover:bg-blue-600 px-6 py-3 rounded-full transition"
                    >
                        <FaGithub />

                        GitHub
                    </a>

                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition"
                    >
                        <FaExternalLinkAlt />

                        Live Demo
                    </a>

                </div>

            </div>

        </motion.div>
    );
}
function Projects() {
    return (
        <section
            id="projects"
            className="bg-slate-950 text-white py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-20">

                    <h3 className="uppercase tracking-[6px] text-blue-500 font-semibold">
                        My Work
                    </h3>

                    <h1 className="text-5xl font-black mt-3">
                        Featured
                        <span className="text-blue-500">
                            {" "}Projects
                        </span>
                    </h1>

                    <div className="w-28 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>

                    <p className="text-gray-400 max-w-3xl mx-auto mt-8 leading-8">
                        Here are some of the projects I have built while learning
                        full stack web development. Each project helped me improve
                        my problem-solving skills and understand real-world software
                        development.
                    </p>

                </div>

                {/* Featured Project */}

                {projects
                    .filter((project) => project.featured)
                    .map((project) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="mb-24"
                        >
                            <div className="mb-6">
                                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    ⭐ Featured Project
                                </span>
                            </div>

                            <ProjectCard project={project} />
                        </motion.div>
                    ))}

                {/* Other Projects */}
{/* 
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >

                    <h2 className="text-3xl font-bold mb-10">
                        Other Projects
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-10">

                        {projects
                            .filter((project) => !project.featured)
                            .map((project) => (
                                <ProjectCard
                                    key={project.title}
                                    project={project}
                                />
                            ))}

                    </div>

                </motion.div> */}

            </div>
        </section>
    );
}

export default Projects;