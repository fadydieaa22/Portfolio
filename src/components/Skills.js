import React, { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiMysql
} from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Copy ref to variable for cleanup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-neon-blue to-cyan-400",
      skills: [
        { name: "React", icon: FaReact, level: 75 },
        { name: "Next.js", icon: SiNextdotjs, level: 60 },
        { name: "TypeScript", icon: SiTypescript, level: 55 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 80 },
        { name: "JavaScript", icon: FaJsSquare, level: 85 },
        { name: "HTML5", icon: FaHtml5, level: 90 },
        { name: "CSS3", icon: FaCss3Alt, level: 85 },
      ],
    },
    {
      title: "Backend",
      color: "from-neon-purple to-purple-400",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 70 },
        { name: "Express", icon: SiExpress, level: 75 },
      ],
    },
    {
      title: "Database",
      color: "from-neon-pink to-pink-400",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 75 },
        { name: "SQL", icon: SiMysql, level: 65 },
      ],
    },
    {
      title: "DevOps & Tools",
      color: "from-neon-green to-green-400",
      skills: [{ name: "Git", icon: FaGitAlt, level: 65 }],
    },
  ];

  return (
    <section id="skills" className="section-container bg-dark-card/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse tech stack powering modern, scalable solutions
          </p>
        </div>

        {/* Skills Grid with Frontend left and (Backend, Dev Tools, Database) stacked on right */}
        {(() => {
          const frontend = skillCategories.find((c) => c.title === "Frontend");
          const rightOrder = [
            skillCategories.find((c) => c.title === "Backend"),
            skillCategories.find((c) => c.title === "DevOps & Tools"),
            skillCategories.find((c) => c.title === "Database"),
          ].filter(Boolean);

          return (
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: Frontend */}
              <div className="card-dark">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${frontend.color} bg-clip-text text-transparent`}>
                  {frontend.title}
                </h3>
                <div className="space-y-4">
                  {frontend.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group p-4 rounded-lg border border-dark-border hover:border-neon-blue/40 hover:bg-gradient-to-r hover:from-dark-border/60 hover:to-transparent transition-all hover:scale-[1.02]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <skill.icon className="text-4xl text-gray-300 group-hover:text-neon-blue transition-colors" />
                          <span className="text-gray-200 text-lg font-semibold tracking-wide">{skill.name}</span>
                        </div>
                        <span className="text-neon-blue text-lg font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-dark-border rounded-full overflow-hidden group-hover:bg-dark-border/80 transition-colors">
                        <div className={`h-full bg-gradient-to-r ${frontend.color} rounded-full ${isVisible ? 'skill-bar' : ''}`} style={{ "--target": `${skill.level}%`, width: isVisible ? undefined : '0%', animationDelay: `${skillIndex * 120}ms` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Backend, Dev Tools, Database stacked */}
              <div className="flex flex-col gap-8">
                {rightOrder.map((category, idx) => (
                  <div key={idx} className="card-dark">
                    <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="group p-4 rounded-lg border border-dark-border hover:border-neon-blue/40 hover:bg-gradient-to-r hover:from-dark-border/60 hover:to-transparent transition-all hover:scale-[1.02]">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <skill.icon className="text-4xl text-gray-300 group-hover:text-neon-blue transition-colors" />
                              <span className="text-gray-200 text-lg font-semibold tracking-wide">{skill.name}</span>
                            </div>
                            <span className="text-neon-blue text-lg font-bold">{skill.level}%</span>
                          </div>
                          <div className="h-3 bg-dark-border rounded-full overflow-hidden group-hover:bg-dark-border/80 transition-colors">
                            <div className={`h-full bg-gradient-to-r ${category.color} rounded-full ${isVisible ? 'skill-bar' : ''}`} style={{ "--target": `${skill.level}%`, width: isVisible ? undefined : '0%', animationDelay: `${skillIndex * 120}ms` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}


        {/* Additional Tech Stack */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold text-gray-300 mb-6">
            Also Familiar With
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Angular",
              "RESTful APIs",
              "Nest.js",
              "Bootstrap",
              "Tailwind CSS",
              "Responsive Design",
              "Agile/Scrum",
              "Vercel",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-gray-400
                         hover:border-neon-blue hover:text-neon-blue transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
