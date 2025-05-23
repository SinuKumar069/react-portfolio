import appStore from "../assets/images/appstore.png";
import playStore from "../assets/images/playstore.png";
import html from "../assets/images/html.png";
import tailwind from "../assets/images/tailwind.png";
import javaScript from "../assets/images/javaScript.png";
import reactLogo from "../assets/images/reactlogo.png";
import next from "../assets/images/next.jpg";
import bootStrap from "../assets/images/bootstrap.png";
import vite from "../assets/images/vite.png";
import figma from "../assets/images/figma.png";
import Cpp from "../assets/images/c++.png";
import Ts from "../assets/images/ts.png";
import Node from "../assets/images/node.png";


const Technologies = () => {
  return (
    <div id="technologies" className="py-12 px-4 lg:px-16">
      {/* Heading */}
      <div>
        <h1 className="pb-12 text-3xl text-center font-thin tracking-tight lg:mt-12 lg:text-6xl text-white">
          Technologies for
          <span className="text-neutral-500 font-thin ml-2">Projects</span>
        </h1>
      </div>

      {/* Cards of Technologies */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {/* Card 1 */}
        <div className="w-[80vw] sm:w-[40vw] md:w-[30vh] h-[19vh] bg-transparent border border-gray-600 rounded-3xl shadow-lg text-white">
          <h3 className="text-center mt-3 text-sm">
            Publication 
          </h3>
          <div className="flex flex-col items-start pl-8">
            <span className="flex items-center mt-4">
              <img
                src={appStore}
                alt="App Store Logo"
                className="w-8 h-6 mr-3"
              />
              App Store
            </span>
            <span className="flex items-center mt-4">
              <img
                src={playStore}
                alt="Play Store Logo"
                className="w-6 h-6 mr-2"
              />
              Play Store
            </span>
          </div>
        </div>

        {/* Card 2 */}
          <div className="w-[80vw] sm:w-[40vw] md:w-[30vh] pb-2 bg-transparent border border-gray-600 rounded-3xl shadow-lg text-white">
            <h3 className="text-center mt-3 text-sm">Front-end Tools</h3>
            <div className="flex flex-wrap flex-col pb-2 gap-4 justify-start pl-8">
              {[
                { name: "HTML", img: html },
                { name: "Tailwind CSS", img: tailwind },
                { name: "JavaScript", img: javaScript },
                { name: "React", img: reactLogo },
                { name: "Next.js", img: next },
                { name: "Bootstrap", img: bootStrap },
                { name: "Vite", img: vite },
                { name: "Figma", img: figma },
              ].map((tool, index) => (
                <span key={index} className="flex items-center mt-4">
            <img
              src={tool.img}
              alt={`${tool.name} Logo`}
              className="w-6 h-6 mr-2"
            />
            {tool.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 */}
        <div className="w-[80vw] sm:w-[40vw] md:w-[30vh] h-[25vh] bg-transparent border border-gray-600 rounded-3xl shadow-lg text-white">
          <h3 className="text-center mt-3 text-sm">Languages</h3>
          <div className="flex flex-col items-start pl-8">
            {[
              { name: "JavaScript", img: javaScript },
              { name: "C++", img: Cpp },
              { name: "TypeScript", img: Ts },
            ].map((lang, index) => (
              <span key={index} className="flex items-center mt-4">
                <img
                  src={lang.img}
                  alt={`${lang.name} Logo`}
                  className="w-6 h-6 mr-2"
                />
                {lang.name}
              </span>
            ))}
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[80vw] sm:w-[40vw] md:w-[30vh] h-[19vh] bg-transparent border border-gray-600 rounded-3xl shadow-lg text-white">
          <h3 className="text-center mt-3 text-sm">Back-end</h3>
          <div className="flex flex-col items-start pl-8">
            {[
              { name: "Node.js", img: Node },
            ].map((backend, index) => (
              <span key={index} className="flex items-center mt-4">
                <img
                  src={backend.img}
                  alt={`${backend.name} Logo`}
                  className="w-6 h-6 mr-2"
                />
                {backend.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
