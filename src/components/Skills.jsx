// import React, { useRef, useEffect, useState } from "react";
// import  JavaScript from "../../public/images/JavaScript.png";
// import  reactLogo from "../../public/images/reactlogo.png";
// import  next from "../../public/images/next.jpg";
// import  tailwind from "../../public/images/tailwind.png"; 


// const Skills = () => {
//   const scrollContainerRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (
//         scrollContainerRef.current &&
//         scrollContainerRef.current.contains(e.target) &&
//         !isHovered
//       ) {
        
//         e.preventDefault();
//         scrollContainerRef.current.scrollBy({
//           left: e.deltaY, 
//           behavior: "smooth",
//         });
//       }
//     };

//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener("wheel", handleWheel, { passive: false });
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("wheel", handleWheel);
//       }
//     };
//   }, [isHovered]);

//   return (
//     <div
//     id="skills"
//     className="relative w-full py-12 flex flex-row">
      
//       <div className="px-8 text-center md:text-left mt-32">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white tracking-tight ">
//           Skills
//         </h1>
//       </div>

//       <div className="relative w-full overflow-hidden">
//         <div
//           ref={scrollContainerRef}
//           className={`scroll-smooth overflow-x-auto flex gap-4 px-4 md:px-8 ${
//             isHovered ? "animate-none" : "animate-scroll"
//           }`}
//           onMouseEnter={() => setIsHovered(true)} 
//           onMouseLeave={() => setIsHovered(false)} 
//         >
//           {[ 
//             {
//               title: "JavaScript",
//               bg: "bg-gradient-to-br from-gray-500 to-yellow-500",
//               icon: JavaScript,
//             },
//             {
//               title: "React",
//               bg: "bg-gradient-to-br from-blue-300 to-blue-800",
//               icon: reactLogo,
//             },
//             {
//               title: "Next.js",
//               bg: "bg-gradient-to-br from-gray-700 to-black",
//               icon: next,
//             },
//             {
//               title: "Tailwind CSS",
//               bg: "bg-gradient-to-br from-gray-900 to-teal-600",
//               icon: tailwind,
//             },
//           ].map((skill, index) => (
//             <div
//               key={index}
//               className={` 
//               ${skill.bg} 
//               flex-shrink-0 w-[180px] h-[250px] 
//               md:w-[250px] md:h-[350px] 
//               rounded-2xl p-4 
//               flex flex-col justify-between 
//               transform transition-transform duration-300 
//               hover:scale-105 hover:shadow-2xl
//             `}
//             >
//               <div>
//                 <img
//                   src={skill.icon}
//                   alt={`${skill.title} icon`}
//                   className="w-12 h-12 md:w-16 md:h-16 mb-4"
//                 />
//                 <h2 className="text-lg md:text-3xl font-thin text-white mb-4">
//                   {skill.title}
//                 </h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
