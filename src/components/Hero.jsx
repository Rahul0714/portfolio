import { motion } from "framer-motion";
import { styles } from "../styles";
import "../index.css";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff] ">Rahul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develope Mobile applications and{" "}
            <br className="sm:block hidden" /> Web applications
          </p>
        </div>
        <div className="xl:block hidden w-1/2 h-80 ml-10 mt-36">
          <div className="m-auto flex flex-wrap">
            <div className="mr-10 flex flex-wrap gap-2 max-w-[250px]">
              <div className="box"></div>
              <div className="box pos1"></div>
              <div className="box pos2"></div>
              <div className="box "></div>
            </div>
            <div className="flex flex-wrap gap-2 max-w-[250px]">
              <div className="box_"></div>
              <div className="box_ pos3"></div>
              <div className="box_ pos4"></div>
              <div className="box_"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
