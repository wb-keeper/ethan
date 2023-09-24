import { motion } from "framer-motion";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 "
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              animi est eveniet facere impedit itaque iusto odio omnis
              perspiciatis qui ratione repellendus.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w[65%]"
          >
            {" "}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
