
import resume from "../assets/My Resume.pdf";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { ReactTyped as Typed } from 'react-typed';

const Landing = ({ setSelectedPage }) => {
    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 h-[30rem] sm:h-[34rem] py-10 md:w-[1000px] md:mx-auto px-5"
        >
            {/* LANDING TEXT */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                className={`z-30 mt-12 md:mt-32`}
            >
                <div>
                    <p className="text-[2.3rem] xs:text-[2.6rem] font-helvetica tracking-wide z-10 text-start text-yellow-300">
                    I'M NIHAL GAVANDI
                    </p>
                    <p className="mt-7 font-helvetica tracking-wide mb-7 text-[.95rem] xs:text-[1.5rem] text-start ">
                        {' '}
                        <Typed
                            strings={['Software Developer', 'Coder', 'Frontend Developer']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                        <br /><br />
                       
                    </p>
                    <p className="mt-7 font-helvetica tracking-wide mb-7 text-[.95rem] xs:text-[1.1rem] text-start text-lightgrey"> As a proficient Software developer, I create elegant, user-friendly Websites.
                        My solid software development background and up-to-date tech knowledge ensure
                        I deliver top-notch code that surpasses client expectations.</p>
                </div>

                {/* BUTTON */}
                <div className="flex mt-10 items-center ">
                    <motion.a
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-r-sm"
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-[.8rem] xs:text-[.91rem] bg-white text-darkgrey transition duration-500 w-full h-full flex items-center justify-center font-helvetica tracking-wide px-6 py-2 rounded-3xl  hover:bg-yellow-300">
                            Resume
                        </div>
                    </motion.a>

                    {/* EMAIL */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="ml-4 relative text-[.8rem] xs:text-[.91rem]"
                    >
                        <a href="mailto:nihalgavandi00@gmail.com" className="relative flex items-center ml-2 group font-helvetica tracking-wide ">
                            nihalgavandi00@gmail.com
                            <GoArrowUpRight size={19} className="ml-0" />
                            <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></span>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Landing;
