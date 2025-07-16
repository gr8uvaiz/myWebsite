import Heading from "./UI/Heading";
import List from "./UI/List";
const WorkExperience = () => {
  const experiences = [
    {
      heading: "AICAN",
      subHeading: "Intern",
      extraInfo: "Feb 2024 - July 2024",
    },
    {
      heading: "AICAN",
      subHeading: "Software Developer",
      extraInfo: "Aug 2025 - Present",
    },
  ];

  return (
    <div>
      <Heading text={"Work Experience"} />
      <List list={experiences} />
    </div>
  );
};

export default WorkExperience;
