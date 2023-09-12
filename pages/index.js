import { motion } from "framer-motion";
import ProjectsBtn from "../components/ProjectsBtn";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            beatae delectus dolore ducimus enim est, fuga ipsam labore maiores
            minus nam non quia sed sequi sint, sunt vel veniam voluptatum!
          </p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      <div>image</div>
    </div>
  );
};

export default Home;
