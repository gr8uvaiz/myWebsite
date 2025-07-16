import Heading from "./UI/Heading";

const Skills = () => {
  const skills = [
    { heading: "HTML", color: "text-orange-600" },
    { heading: "CSS", color: "text-blue-600" },
    { heading: "JavaScript", color: "text-yellow-600" },
    { heading: "React", color: "text-cyan-500" },
    { heading: "Node.js", color: "text-green-600" },
    { heading: "MongoDB", color: "text-green-700" },
    { heading: "Express.js", color: "text-gray-700" },
    { heading: "Tailwind CSS", color: "text-teal-500" },
    { heading: "Git & Github", color: "text-gray-800" },
    { heading: "Ant Design", color: "text-blue-500" },
  ];

  return (
    <div >
      <Heading text={"Skills"} />
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`
              bg-white rounded-full shadow-sm border 
              px-5 py-2 flex items-center justify-center
              text-sm font-medium text-gray-700 whitespace-nowrap
              hover:scale-105 border-gray-100
              transition-all duration-300 ease-in-out cursor-pointer
              ${skill.color}
            `}>
            {skill.heading}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
