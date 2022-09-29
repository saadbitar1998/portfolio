import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="headerTitle">About</h3>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base ">
          My name is Saad Bitar! I am a full stack developer. Here is a little
          bit about me... I have a bachelor degree in Computer Engineering from
          Beirut Arab University in Lebanon, I have a CGPA of 3.54. I have
          worked with corporations to help build amazing mobile and web apps
          both frontend and backend. In addition, I spend my free time learning
          and keeping up with new technologies, techniques and languages in the
          tech wold
        </p>
      </div>
    </motion.div>
  );
};

export default About;
