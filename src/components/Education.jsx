import React from "react";
import { FaGraduationCap as GraduationCap, FaCalendarAlt as Calendar, FaMapMarkerAlt as MapPin } from "react-icons/fa";

const Education = () => {
  const educationData = [
    // {
    //   degree: "Bachelor of Technology in Electronics and Communication Engineering",
    //   university: "Haldia Institute of Technology, Haldia",
    //   duration: "2023 - 2027",
    //   location: "Kolkata, India",
    //   highlights: [
    //     "Major in Electronics and Communication Engineering",
    //     "Web Development and Data Structures",
    //     "Active member of Coding and Innovation Club",
    //   ],
    // },
    {
      degree: "Senior Secondary Education (12th Grade)",
      school: "Inter Science College, Hazaribagh",
      board: "JAC",
      duration: "201 - 2019",
      location: "New Delhi, India",
      highlights: [
        "Stream: Science (PCM)",
        "Board Percentage: 79%",
        "Active in School Science Exhibitions",
      ],
    },
    {
      degree: "Secondary Education (10th Grade)",
      school: "BNS DAV Public School, Giridih",
      board: "CBSE",
      duration: "2019 - 2020",
      location: "Jharkhand, India",
      highlights: [
        "Percentage: 82.6%",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-thin text-center text-gray-200 mb-12">
          Educational 
          <span className="text-neutral-500 font-thin ml-4">Journey</span>
        </h2>

        <div className="relative before:absolute before:inset-0 before:ml-5 before:border-l-2 before:border-gray-600">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-16 pb-12 group">
              {/* Timeline Dot */}
              <div
                className="absolute left-0 top-2 w-10 h-10 bg-blue-600 rounded-full border-4 border-neutral-950 
                              group-hover:bg-blue-700 transition-all duration-300"
              >
                <GraduationCap className="w-6 h-6 text-white m-1" />
              </div>

              {/* Education Card */}
              <div
                className="bg-neutral-900 shadow-lg rounded-xl p-6 border border-gray-700 
                           transform transition-all duration-300 group-hover:scale-[1.02] 
                           group-hover:shadow-xl"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-400 font-medium mb-3">
                  {edu.university || edu.school} |{" "}
                  {edu.board ? `${edu.board} Board` : ""}
                </p>

                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="bg-blue-800/10 rounded-lg p-4">
                  <h4 className="text-sm sm:text-md font-semibold text-gray-300 mb-2">
                    Key Highlights
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
