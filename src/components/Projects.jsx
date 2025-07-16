import Heading from "./UI/Heading";
import List from "./UI/List";
const Projects = () => {
  const allProjects = [
    {
      heading: "WorkSphere",
      subHeading: "Under development",
      extraInfo: "MERN Stack",
    },
    {
      heading: "Bubble Game",
      subHeading: "Active",
      extraInfo: "HTML, CSS, JS",
    },
    {
      heading: "URL Shortner",
      subHeading: "Active",
      extraInfo: "HTML, CSS, JS",
      link: "https://github.com/gr8uvaiz/url-shortner",
    },
    {
      heading: "News App",
      subHeading: "Active",
      extraInfo: "HTML, CSS, JS, API",
      link: "https://github.com/gr8uvaiz/NewsHub-Timely_News_Updates",
    },
  ];
  return (
    <div>
      <Heading text={"Projects"} />
      <List list={allProjects} />
    </div>
  );
};

export default Projects;
