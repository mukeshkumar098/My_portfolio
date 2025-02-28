import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlineMessage } from "react-icons/md";
import { motion } from "framer-motion";

const Contect = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            "service_r36hhpc",  
            "template_evlu7oo", 
            formRef.current,
            "Jpq2UzOtwyJWB5Tas"  
        ).then(
            (response) => {
                console.log("Email sent successfully!", response);
                toast.success("Email sent successfully!", { position: "top-right", autoClose: 3000 });

                setLoading(false);
                setFormData({ name: "", email: "", message: "" }); 
            },
            (error) => {
                console.error("Failed to send email:", error);
                toast.error("Failed to send email!", { position: "top-right", autoClose: 3000 });
                setLoading(false);
            }
        );
    };

    return (
        <section className="flex justify-center items-center w-full">
            <div className="bg-black w-full pb-1">
                <div className="text-white flex justify-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="relative bg-[#0A1123] py-2 px-5 border-2 border-cyan-200 rounded-[10px] text-xl font-bold text-cyan-200">
                            Let's Connect
                        </h1>
                        <span>
                            <FaLongArrowAltDown className="relative top-[-11px]" size={25} color="white" />
                        </span>
                    </div>
                </div>

                <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                    <div className="flex justify-around pt-12 gap-6 flex-wrap py-2 px-5">
                        <div>
                            <img className="" src="MERN.webp" alt="MERN Stack" />
                        </div>

                        <form ref={formRef} onSubmit={handleSubmit} className="flex mb-20 flex-col justify-center items-center p-6 rounded-lg shadow-[0px_20px_50px_rgba(59,130,246,0.8)]">
                            <div className="relative">
                                <h3 className="text-sm text-white mb-0.5">Name</h3>
                                <input
                                    className="text-sm sm:w-96 border-cyan-200 text-white !bg-slate-800 py-3 px-7 w-80 lg:w-[400px] rounded outline-none placeholder:text-gray-200 border-2 mb-4"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <IoPerson className="absolute text-slate-200 text-[17px] ml-2 top-9" />
                            </div>

                            <div className="relative">
                                <h3 className="text-sm text-white mb-0.5">Your Email</h3>
                                <input
                                    className="text-sm sm:w-96 border-cyan-200 text-white !bg-slate-800 py-3 px-8 w-80 lg:w-[400px] rounded outline-none placeholder:text-gray-200 border-2 mb-4"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <MdOutlineMailOutline className="absolute text-slate-200 text-[19px] ml-2 top-[37px]" />
                            </div>

                            <div className="w-80 sm:w-96 relative lg:w-[400px] flex flex-col items-start">
                                <h3 className="text-sm text-white mb-0.5">Message</h3>
                                <textarea
                                    className="w-full h-36 border-cyan-200 text-white !bg-slate-800 placeholder:text-gray-200 text-sn py-2 px-7 rounded outline-none border-2 mb-4"
                                    name="message"
                                    placeholder="Hi..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <MdOutlineMessage className="absolute text-slate-200 text-[17px] ml-2 top-9" />
                                <button type="submit" className="py-3 px-5 font-semibold bg-cyan-600 shadow-lg hover:bg-cyan-400 rounded text-sm text-white mt-4 w-full" disabled={loading}>
                                    {loading ? "Sending..." : "SEND"}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
    
            <ToastContainer />
        </section>
    );
};

export default Contect;
