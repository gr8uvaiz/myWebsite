import MyImg from "../assets/me.png";

const LogoSection = () => {
  return (
    <div className="h-[440px] justify-between flex flex-col">
      {/* Image */}
      <img
        className="w-[112px] h-[144px] rounded-[70px]"
        // src="https://gaddafirusli.my/me.png"
        src={MyImg}
        alt=""
      />

      {/* Heading */}
      <h1 className="font-thin text-[40px] text-black leading-10">
        <em>Developer,</em> Maker. Always building.
      </h1>

      {/* Description */}
      <p className="font-thin text-zinc-800">
        Full-stack MERN developer specializing in building high-performance web
        applications. I collaborate with teams to create scalable solutions that
        optimize workflows and enhance user experiences. Always coding, always
        focused on delivering value through technology
      </p>
    </div>
  );
};

export default LogoSection;
