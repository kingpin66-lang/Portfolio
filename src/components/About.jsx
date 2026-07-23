import { motion } from "framer-motion";
import profile from "../assets/Profile.png";

import {
    FaUserGraduate,
    FaLaptopCode,
    FaDatabase,
    FaCode,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";

function About() {
    return (
        <section
            id="about"
            className="bg-slate-950 text-white py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-20">

                    <h3 className="uppercase tracking-[6px] text-blue-500 font-semibold">
                        About Me
                    </h3>

                    <h1 className="text-5xl font-black mt-3">
                        Get To Know{" "}
                        <span className="text-blue-500">
                            Me
                        </span>
                    </h1>

                    <div className="w-28 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>

                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT SIDE */}

                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <img
                            
                            src={profile}
                            alt=""
                            className="rounded-3xl border-2 border-blue-500 shadow-2xl"
                        />

                        {/* Floating Experience Card */}

                        <div className="absolute -bottom-10 -left-5 bg-slate-900 rounded-2xl px-8 py-6 shadow-xl border border-slate-800">

                            <h1 className="text-4xl font-bold text-blue-500">
                                1+
                            </h1>

                            <p className="text-gray-400">
                                Years of Learning
                            </p>

                        </div>

                        {/* Social Card */}

                        <div className="mt-20 bg-slate-900 rounded-2xl p-6 border border-slate-800">

                            <h2 className="text-center font-semibold tracking-widest text-gray-300 mb-6">
                                LET'S CONNECT
                            </h2>

                            <div className="flex justify-center gap-6 text-3xl">

                                <a
                                    href="https://github.com/kingpin66-lang/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-500 duration-300"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/sujal-poudyal/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-500 duration-300"
                                >
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="https://www.instagram.com/shu_z_all/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-pink-500 duration-300"
                                >
                                    <FaInstagram />
                                </a>



                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT SIDE */}

                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                    >

                        <h2 className="flex items-center gap-3 text-4xl font-bold mb-8">

                            <FaUserGraduate className="text-blue-500" />

                            Who I Am

                        </h2>

                        <p className="text-lg leading-9 text-gray-300">

                            I'm{" "}
                            <span className="text-blue-500 font-semibold">
                                Sujan Poudyal
                            </span>
                            , a passionate Full Stack MERN Developer from Nepal.

                            I enjoy building modern,
                            responsive and user-friendly web applications
                            that solve real-world problems.

                        </p>

                        <p className="text-lg leading-9 text-gray-300 mt-6">

                            I specialize in{" "}

                            <span className="text-blue-500 font-semibold">
                                React.js
                            </span>

                            ,

                            <span className="text-blue-500 font-semibold">
                                Node.js
                            </span>

                            ,

                            <span className="text-blue-500 font-semibold">
                                Express.js
                            </span>

                            and

                            <span className="text-blue-500 font-semibold">
                                MongoDB
                            </span>

                            while continuously learning new technologies
                            to improve my development skills.

                        </p>
                        {/* Stats */}

                        <div className="grid md:grid-cols-2 gap-6 mt-12">

                            {/* <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 duration-300">

                                <FaLaptopCode className="text-blue-500 text-3xl mb-4" />

                                <h1 className="text-4xl font-bold">
                                    10+
                                </h1>

                                <p className="text-gray-400 mt-2">
                                    Projects Completed
                                </p>

                            </div> */}

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 duration-300">

                                <FaCode className="text-blue-500 text-3xl mb-4" />

                                <h1 className="text-4xl font-bold">
                                    15+
                                </h1>

                                <p className="text-gray-400 mt-2">
                                    Technologies Learned
                                </p>

                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 duration-300">

                                <FaDatabase className="text-blue-500 text-3xl mb-4" />

                                <h1 className="text-4xl font-bold">
                                    MongoDB
                                </h1>

                                <p className="text-gray-400 mt-2">
                                    Database Management
                                </p>

                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 duration-300">

                                <FaLaptopCode className="text-blue-500 text-3xl mb-4" />

                                <h1 className="text-4xl font-bold">
                                    MERN
                                </h1>

                                <p className="text-gray-400 mt-2">
                                    Full Stack Development
                                </p>

                            </div>

                        </div>

                        {/* Education */}

                        <div className="mt-14">

                            <h2 className="text-3xl font-bold mb-6">
                                Education
                            </h2>

                            <div className="border-l-4 border-blue-500 pl-6">

                                <h3 className="text-2xl font-semibold">
                                    Bachelor in Computer Application (BCA)
                                </h3>

                                <p className="text-blue-400 mt-2">
                                    Tribhuvan University
                                </p>

                                <p className="text-gray-400 mt-2">
                                    2022 - Present
                                </p>

                            </div>

                        </div>

                        {/* What I Do */}

                        <div className="mt-16">

                            <h2 className="text-3xl font-bold mb-8">
                                What I Do
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6">

                                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 duration-300">

                                    <FaCode className="text-4xl text-blue-500 mb-4" />

                                    <h3 className="font-bold text-xl mb-3">
                                        Web Development
                                    </h3>

                                    <p className="text-gray-400">
                                        Building modern, responsive and interactive websites
                                        using React and modern frontend technologies.
                                    </p>

                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 duration-300">

                                    <FaLaptopCode className="text-4xl text-green-500 mb-4" />

                                    <h3 className="font-bold text-xl mb-3">
                                        Backend Development
                                    </h3>

                                    <p className="text-gray-400">
                                        Developing secure REST APIs with Express.js,
                                        JWT authentication and scalable backend architecture.
                                    </p>

                                </div>

                                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500 duration-300">

                                    <FaDatabase className="text-4xl text-purple-500 mb-4" />

                                    <h3 className="font-bold text-xl mb-3">
                                        Database Design
                                    </h3>

                                    <p className="text-gray-400">
                                        Creating efficient MongoDB schemas and
                                        managing application data effectively.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Quote */}

                        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-8">

                            <p className="italic text-xl text-gray-300 text-center">
                                "I believe in continuous learning and building
                                software that creates real-world impact."
                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default About;