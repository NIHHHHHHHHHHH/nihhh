import { FaHtml5, FaCss3Alt, FaJs,FaBootstrap, FaReact, FaNodeJs, FaGitAlt, FaGithub,FaPython  } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';

const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Python', icon: <FaPython  /> },
    { name: 'Firebase', icon: <SiFirebase /> },
   
    
];

const Skills = () => {
    return (
        <section id="skills" className="md:w-[1000px] mt-11 md:mx-auto my-9 px-5 py-0 sm:py-14 text-white">
            <p className="text-[1.68rem] font-helvetica tracking-wide z-10 text-start mb-14 text-yellow-300">
                SKILLS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center md:p-2 sm:p-3 lg:p-4 rounded-md border border-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <div className="text-4xl mb-2">{skill.icon}</div>
                        <span className="text-md sm:text-xl font-helvetica tracking-wide">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
