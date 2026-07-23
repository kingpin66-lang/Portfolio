import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const navItems = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Contact",
    ];

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-lg z-50 shadow-lg"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center h-20">

                    {/* Logo */}

                    <h1 className="text-3xl font-extrabold text-blue-500 cursor-pointer">
                        Sujan<span className="text-white">.</span>
                    </h1>

                    {/* Desktop Menu */}

                    <ul className="hidden md:flex gap-8 text-white font-medium">

                        {navItems.map((item) => (
                            <li key={item}>
                                <Link
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer hover:text-blue-500 transition"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}

                    </ul>

                    {/* Icons */}

                    <div className="hidden md:flex items-center gap-5 text-xl text-white">

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

                        {/* <a
                            href="/resume.pdf"
                            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition"
                        >
                            Resume
                        </a> */}

                    </div>

                    {/* Mobile Button */}

                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setMenu(!menu)}
                    >
                        {menu ? <FaTimes /> : <FaBars />}
                    </button>

                </div>

            </div>

            {/* Mobile Menu */}

            {menu && (

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-slate-900"
                >
                    <ul className="flex flex-col items-center gap-8 py-8 text-white text-lg">

                        {navItems.map((item) => (
                            <li key={item}>
                                <Link
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setMenu(false)}
                                    className="cursor-pointer hover:text-blue-500"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}

                        <div className="flex gap-5 text-2xl">

                            <FaGithub />

                            <FaLinkedin />

                        </div>

                        <a
                            href="/resume.pdf"
                            className="bg-blue-600 px-6 py-2 rounded-full"
                        >
                            Resume
                        </a>

                    </ul>
                </motion.div>

            )}

        </motion.nav>
    );
}

export default Navbar;