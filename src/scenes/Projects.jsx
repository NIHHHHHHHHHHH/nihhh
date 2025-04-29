
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const cards = [
  {
    url: require("../assets/BALIHANS.jpg"),
     title: "BALIHANS",
     description: "Developed and deployed a full-stack web application using the MERN stack. Integrated Cloudinary for efficient media hosting andoptimized performance for a seamless user experience. Hosted the application on Google Cloud Platform (GCP)using Cloud Run for backend and frontend services. Built a feature-rich, responsive website",
     tools: "REACTJS &nbsp;&nbsp;TAILWINDCSS &nbsp;&nbsp;NODEJS  &nbsp;&nbsp;EXPRESSJS &nbsp;&nbsp;MONGODB &nbsp;&nbsp;GCP",
     link: "https://balihans.com/",
     id: 1,
     color: "text-gray-300",
     shadow: "yes",
   },
  {
   url: require("../assets/EVOLT.jpg"),
    title: "EVOLT",
    description: "Developed using React and Tailwind CSS for a seamless and adaptive user experience across all devices. Leveraged Firebase for secure authentication, real-time database, and hosting. Demonstrated expertise in modern web technologies and deployment with the creation of Evolt.",
    tools: "Reactjs &nbsp;&nbsp; TailwindCss &nbsp;&nbsp; Firebase",
    link: "https://ecocharge-18a51.web.app/",
    id: 2,
    color: "text-gray-300",
    shadow: "yes",
  },
  {
   url: require("../assets/DEAFVOICE.jpg"),
    title: "DEAF VOICE",
    description: "Created a video calling platform specifically for sign language communication. Utilized WebRTC, JavaScript, and WebSocket for real-time video calls with integrated sign language features. Provided an innovative solution for accessible and effective communication.",
    tools: "HTML &nbsp;&nbsp;CSS &nbsp;&nbsp;JAVASCRIPT &nbsp;PYTHON ",
    link: "https://bespoke-baklava-cc2b6c.netlify.app/",
    id: 3,
    color: "text-gray-300",
    shadow: "yes",
  },

];

const Projects = () => {
  const scrollRef = useRef(null);
  const [isLeftButtonActive, setIsLeftButtonActive] = useState(false);
  const [isRightButtonActive, setIsRightButtonActive] = useState(true);

  useEffect(() => {
    const handleWheel = (event) => {
      const element = scrollRef.current;
      const isScrollingHorizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);

      if (isScrollingHorizontal) {
        element.scrollLeft += event.deltaX;
        event.preventDefault();
      }
    };

    const element = scrollRef.current;
    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      const maxScrollLeft = element.scrollWidth - element.clientWidth;
      setIsLeftButtonActive(element.scrollLeft > 0);
      setIsRightButtonActive(element.scrollLeft < maxScrollLeft);
    };

    const element = scrollRef.current;
    element.addEventListener("scroll", handleScroll);
    
    handleScroll();

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (direction) => {
    const element = scrollRef.current;
    const scrollAmount = direction === "left" ? -331 : 331;
    element.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative">
      <div className="flex items-center justify-between px-5 md:mx-[440px] md:w-[1200px] my-14">
        <p className="text-[1.68rem] font-helvetica tracking-wide z-10 text-start text-yellow-300">
          PROJECTS
        </p>
        <div className="flex items-center space-x-2">
          <motion.button
            onClick={() => scroll("left")}
            className={`transition-all ${isLeftButtonActive ? 'text-white' : 'opacity-30'}`}
            disabled={!isLeftButtonActive}
            whileTap={isLeftButtonActive ? { scale: 0.5 } : {}}
          >
            <IoIosArrowBack size={20} />
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            className={`transition-all pl-3 ${isRightButtonActive ? 'text-white' : 'opacity-30'}`}
            disabled={!isRightButtonActive}
            whileTap={isRightButtonActive ? { scale: 0.5 } : {}}
          >
            <IoIosArrowForward size={20} />
          </motion.button>
        </div>
      </div>

      <div
  ref={scrollRef}
  className="flex h-full overflow-x-auto overflow-y-hidden px-5 no-scrollbar md:px-10 lg:px-[calc(50vw-550px)]"
  style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
>
  {cards.map((card, index) => (
    <motion.div
      className={`rounded-md ${index !== 0 ? 'ml-6 md:ml-8 lg:ml-12' : ''} flex-shrink-0 w-full sm:w-[350px] md:w-[431px] lg:w-[630px]`}
      key={card.id}
    >
      <a href={card.link} target="_blank" rel="noopener noreferrer">
        <div
          className="group relative w-full h-[250px] sm:h-[300px] md:h-[377px] lg:h-[460px] bg-cover bg-center"
          style={{ backgroundImage: `url(${card.url})` }}
          whileHover={{ backgroundSize: "103% auto" }}
        >
          <p className={`bg-black text-white font-helvetica tracking-wide text-xs sm:text-sm md:text-base ${card.color} mb-1 p-4 sm:p-6 lg:p-7`}>
            {card.title}
          </p>
        </div>
      </a>
      <div className="p-3 sm:p-4 bg-black rounded-b-md shadow-md">
        <p
          className={`font-helvetica tracking-wide text-xs sm:text-sm md:text-base opacity-75 ${card.color} mb-4`}
          dangerouslySetInnerHTML={{ __html: card.tools.replace(/\s/g, '&nbsp;') }}
        ></p>
        <p
          className={`mb-4 font-helvetica tracking-wide text-xs sm:text-sm md:text-base ${card.color} ${card.shadow === 'yes' ? 'text-shadow-md' : ''}`}
        >
          {card.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>


    </section>
  );
};

export default Projects;


