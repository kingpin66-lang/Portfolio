import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-white">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-3 gap-12">

                    {/* Logo */}

                    <div>

                        <h1 className="text-4xl font-black text-blue-500">
                            Sujan<span className="text-white">.</span>
                        </h1>

                        <p className="text-gray-400 mt-6 leading-8">
                            MERN Stack Developer passionate about creating modern,
                            responsive and scalable web applications with clean UI
                            and efficient backend architecture.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h2 className="text-2xl font-bold mb-6">
                            Quick Links
                        </h2>

                        <ul className="space-y-4 text-gray-400">

                            <li>
                                <Link
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer hover:text-blue-500"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer hover:text-blue-500"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="skills"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer hover:text-blue-500"
                                >
                                    Skills
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer hover:text-blue-500"
                                >
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer hover:text-blue-500"
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Social */}

                    <div>

                        <h2 className="text-2xl font-bold mb-6">
                            Connect
                        </h2>

                        <div className="flex gap-6 text-3xl">

                            <a
                                href="https://github.com/kingpin66-lang/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-500 transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                            href="https://www.linkedin.com/in/sujal-poudyal/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-500 transition"
                            >
                                <FaLinkedin />
                            </a>

                        </div>

                        <p className="text-gray-400 mt-8">
                            📧 poudyalsujal77@gmail.com
                        </p>

                        <p className="text-gray-400 mt-2">
                            📍 Nepal
                        </p>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-gray-500">
                        © {year} Sujan Poudyal. All Rights Reserved.
                    </p>

                    <motion.button
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 w-12 h-12 rounded-full flex justify-center items-center"
                    >
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                        >
                            <FaArrowUp />
                        </Link>
                    </motion.button>

                </div>

            </div>

        </footer>
    );
}

export default Footer;