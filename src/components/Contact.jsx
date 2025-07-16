import Heading from "./UI/Heading";
import List from "./UI/List";

const Contact = () => {
  const socials = [
    {
      heading: "Github",
      extraInfo: "@gr8uvaiz",
      link: "https://github.com/gr8uvaiz",
    },
    {
      heading: "Linkedin",
      extraInfo: "Mohammmad Uvaiz",
      link: "https://www.linkedin.com/in/mohammad-uvaiz-57353620b/",
    },
    {
      heading: "Instagram",
      extraInfo: "@gr8_uvaiz_",
      link: "https://www.instagram.com/gr8_uvaiz_/",
    },
  ];
  return (
    <div>
      <Heading text={"Contact"} />
      <p className="font-thin text-zinc-800">
        <em>Let&apos;s Connect</em>, For Any Collaboration Or Project Enquiries,
        Please Send Email To{" "}
        <a href="mailto:mohammeduvaiz0786@gmail.com" className="text-blue-800 font-light underline">
          mohammeduvaiz0786@gmail.com
        </a>
        , You can also reach out to me github or linkedin
      </p>

      <div className="mt-4">
        <List list={socials} />
      </div>
    </div>
  );
};

export default Contact;
