import React from "react";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkdin.png";
import mail from "../assets/images/mail.png";

const GetInTouch = () => {
  return (
    <div id="contact" className="mt-16 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <div className="text-center">
        <h1 className="pb-12 text-3xl sm:text-4xl md:text-6xl font-thin tracking-tight text-white">
          Get In
          <span className="text-neutral-500 font-thin ml-2">Touch</span>
        </h1>
      </div>

      {/* Follow Me Section */}
      <div className="flex justify-center items-center">
        <div className="border border-white rounded-full h-[6vh] sm:h-[8vh] w-[70vw] sm:w-[50vw] md:w-[40vw] bg-black flex justify-between items-center px-4 sm:px-8">
          <span className="text-white text-sm sm:text-xl">Follow me</span>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/SinuKumar069"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 filter invert"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sinu-kumar-6788902a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 filter invert"
              />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#sent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mail}
                alt="Mail"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 filter invert"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
