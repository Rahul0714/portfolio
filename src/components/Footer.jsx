import { GrLinkedin, GrGithub, GrTwitter } from "react-icons/gr";
import { FcDocument } from "react-icons/fc";
export const Footer = () => {
  return (
    <div className="text-white flex justify-center gap-14 w-full cursor-pointer">
      <a href="https://www.linkedin.com/in/rahul-mujumdar-53829518b/">
        <div className="flex items-center gap-3 text-lg">
          <GrLinkedin /> Linkedin
        </div>
      </a>
      <div className="flex items-center gap-3 text-lg cursor-pointer">
        <FcDocument /> Resume
      </div>
      <a href="https://github.com/Rahul0714">
        <div className="flex items-center gap-3 text-lg cursor-pointer">
          <GrGithub />
          Github
        </div>
      </a>
      <a href="https://twitter.com/rahul_mujumdar">
        <div className="flex items-center gap-3 text-lg cursor-pointer">
          <GrTwitter /> Twitter
        </div>
      </a>
    </div>
  );
};
