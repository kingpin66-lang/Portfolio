import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPaperPlane,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_gzjfc2z",
                "template_jernc8n",
                form.current,
                "GqUOMzpZRZA7_XW9t"
            )
            .then(() => {
                alert("Message sent successfully!");
                form.current.reset();
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong.");
            });
    };
    return (
        <section
            id="contact"
            className="bg-slate-950 text-white py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-20">

                    <h3 className="uppercase tracking-[6px] text-blue-500 font-semibold">
                        Contact
                    </h3>

                    <h1 className="text-5xl font-black mt-3">
                        Let's
                        <span className="text-blue-500">
                            {" "}Work Together
                        </span>
                    </h1>

                    <div className="w-28 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>

                </div>

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Left Side */}

                    <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >

                        <h2 className="text-4xl font-bold mb-6">
                            Get In Touch
                        </h2>

                        <p className="text-gray-400 leading-8 mb-10">
                            I'm always open to discussing new opportunities,
                            freelance work, internships, or simply connecting with
                            fellow developers.
                        </p>

                        <div className="space-y-6">

                            <div className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 duration-300">

                                <FaEnvelope className="text-3xl text-blue-500" />

                                <div>

                                    <h3 className="font-semibold">
                                        Email
                                    </h3>

                                    <p className="text-gray-400">
                                        poudyalsujal77@gmail.com                  </p>

                                </div>

                            </div>

                            <div className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 duration-300">

                                <FaMapMarkerAlt className="text-3xl text-blue-500" />

                                <div>

                                    <h3 className="font-semibold">
                                        Location
                                    </h3>

                                    <p className="text-gray-400">
                                        Nepal
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="flex gap-6 mt-10 text-3xl">

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

                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6"
                    >

                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                        />

                        <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            required
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                        />

                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Message"
                            required
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold duration-300"
                        >
                            <FaPaperPlane />
                            Send Message
                        </button>

                    </motion.form>

                </div>

            </div>
        </section>
    );
}

export default Contact;