import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";

import profile from "../assets/Profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-black mb-5">
              Sujan
              <span className="text-blue-500"> Poudyal</span>
            </h1>

            <TypeAnimation
              sequence={[
                "Full Stack MERN Developer",
                2000,
                "React Developer",
                2000,
                "Node.js Developer",
                2000,
                "Frontend Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-2xl text-gray-300 font-semibold"
            />

            <p className="mt-6 text-gray-400 leading-8">
              Passionate MERN Stack Developer focused on building
              responsive, scalable and modern web applications using
              React, Node.js, Express and MongoDB.
            </p>

            <div className="flex gap-5 mt-10">

              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full font-semibold"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="border border-blue-500 hover:bg-blue-500 transition px-8 py-3 rounded-full font-semibold"
              >
                Download CV
              </a>

            </div>

            <div className="flex gap-6 text-3xl mt-10">

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

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

            <img
              src={profile}
              alt="Profile"
              className="w-80 h-80 md:w-[430px] md:h-[430px] object-cover rounded-full border-4 border-blue-500 shadow-2xl"
            />

            {/* Floating Icons */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute top-8 left-8 bg-slate-900 p-4 rounded-xl shadow-lg"
            >
              <FaReact className="text-cyan-400 text-4xl" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="absolute bottom-5 left-2 bg-slate-900 p-4 rounded-xl"
            >
              <FaNodeJs className="text-green-500 text-4xl" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.3,
              }}
              className="absolute right-5 top-16 bg-slate-900 p-4 rounded-xl"
            >
              <SiMongodb className="text-green-400 text-4xl" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.8,
              }}
              className="absolute bottom-8 right-0 bg-slate-900 p-4 rounded-xl"
            >
              <SiExpress className="text-white text-4xl" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute top-1/2 -left-5 bg-slate-900 p-4 rounded-xl"
            >
              <SiJavascript className="text-yellow-400 text-4xl" />
            </motion.div>

          </motion.div>

        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="flex justify-center mt-20"
        >
          <FaArrowDown className="text-3xl text-blue-500" />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;