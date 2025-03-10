import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 space-y-8 lg:space-y-0"
    >

      <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start lg:pl-12">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-4 sm:pb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-thin tracking-tight text-white"
        >
          Sinu Kumar
        </motion.h1>

        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent pb-2"
        >
          Full Stack Developer
        </motion.span>

        <div className="w-full mt-4">
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-white text-sm sm:text-base mb-4 max-w-prose mx-auto lg:mx-0"
          >
            <span className="font-semibold">Full-stack developer</span> with expertise in building scalable web applications using <span className="font-semibold">JavaScript, React, Node.js, and database systems</span>. Experienced in designing user-centric interfaces, solving complex technical challenges, and optimizing backend performance. Committed to continuous learning and adapting to advancements in web technologies.
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <motion.button
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="text-black bg-white px-6 py-3 rounded-3xl hover:bg-black hover:text-white transition-colors"
          >
            Download CV
          </motion.button>

          <motion.button
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="text-white bg-transparent px-6 py-3 rounded-3xl border border-white hover:bg-white hover:text-black transition-colors"
          >
            See experiences
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="w-full lg:w-[45%] flex justify-center items-center pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 lg:pr-12"
      >
        <img
          src="\public\images\sinuimg.jpg"
          alt="Sinu Kumar"
          className="object-cover mx-auto rounded-[70%_30%_30%_70%/_60%_40%_60%_40%] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
