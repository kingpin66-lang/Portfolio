import { motion } from "framer-motion";

import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiRedux,
    SiNextdotjs,
    SiPostman,
    SiCloudinary,
    SiVercel,
    SiRailway,
} from "react-icons/si";

const frontend = [
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
    // { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
];

const backend = [
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    // { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
];

const tools = [
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
    { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-400" },
    { name: "Vercel", icon: <SiVercel />, color: "text-white" },
    { name: "Railway", icon: <SiRailway />, color: "text-purple-400" },
];

function SkillCard({ skill }) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.05 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-blue-500 transition-all duration-300"
        >
            <div className={`text-5xl ${skill.color}`}>
                {skill.icon}
            </div>

            <h3 className="font-semibold text-lg">
                {skill.name}
            </h3>
        </motion.div>
    );
}

function Skills() {
    return (
        <section
            id="skills"
            className="bg-slate-950 text-white py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <h3 className="uppercase tracking-[6px] text-blue-500 font-semibold">
                        My Skills
                    </h3>

                    <h1 className="text-5xl font-black mt-3">
                        Technologies
                        <span className="text-blue-500">
                            {" "}I Use
                        </span>
                    </h1>

                    <div className="w-28 h-1 bg-blue-500 mx-auto rounded-full mt-6"></div>

                </div>

                {/* Frontend */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                    <h2 className="text-3xl font-bold mb-8">
                        Frontend
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">

                        {frontend.map((skill) => (
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                            />
                        ))}

                    </div>

                </motion.div>

                {/* Backend */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >

                    <h2 className="text-3xl font-bold mb-8">
                        Backend & Database
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        {backend.map((skill) => (
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                            />
                        ))}

                    </div>

                </motion.div>

                {/* Tools */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >

                    <h2 className="text-3xl font-bold mb-8">
                        Tools & Deployment
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                        {tools.map((skill) => (
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                            />
                        ))}

                    </div>

                </motion.div>

            </div>
        </section>
    );
}

export default Skills;