import React from "react";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import Reveal from "./Reveal";

const Experience = () => {
  const experiences = [
    {
      company: "ITI (Information Technology Institute)",
      position: "Full-Stack Development Intern",
      duration: "4 months (Intensive Program)",
      description:
        "Completed an intensive 4-month internship program focused on full-stack web development. Gained hands-on experience with modern web technologies including React, Angular, Node.js, Express, and MongoDB. Worked on multiple real-world projects and collaborated with fellow interns in an agile environment.",
      achievements: [
        "Successfully developed and deployed 3 full-stack web applications using MERN stack",
        "Learned and implemented RESTful API design patterns and best practices",
        "Collaborated with team members using Git version control and agile methodologies",
        "Built responsive user interfaces with React and Angular frameworks",
      ],
      color: "neon-blue",
    },
  ];

  return (
    <section id="experience" className="section-container bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              A focused highlight of my professional experience
            </p>
          </div>
        </Reveal>

        {/* Single Experience Card */}
        {experiences.map((exp, index) => (
          <Reveal key={index}>
            <div className="card-dark relative overflow-hidden pt-12 hover:scale-[1.02] transition-transform duration-300">
            {/* Badge */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-neon-blue/20 border border-neon-blue text-neon-blue rounded-full text-sm font-semibold">
              4 Months
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Logo / Initials */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-neon-blue font-bold text-2xl border-2 border-neon-blue/30">
                ITI
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-100">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-base">
                    <FiCalendar size={20} />
                    {exp.duration}
                  </div>
                </div>
                <p className="text-neon-blue font-semibold text-lg flex items-center gap-2 mb-4">
                  <FiBriefcase size={22} />
                  {exp.company}
                </p>
                <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">{exp.description}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                      <span className="text-neon-blue mt-1 text-lg">▹</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
