import React from "react";
import { FiCode, FiZap, FiUsers, FiTrendingUp } from "react-icons/fi";
import Reveal from "./Reveal";

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: FiZap,
      title: "Fast Performance",
      description:
        "Optimizing applications for speed and delivering exceptional user experiences.",
    },
    {
      icon: FiUsers,
      title: "Collaboration",
      description:
        "Working seamlessly with teams to deliver projects on time and beyond expectations.",
    },
    {
      icon: FiTrendingUp,
      title: "Continuous Learning",
      description:
        "Staying updated with latest technologies and industry trends.",
    },
  ];

  return (
    <section id="about" className="section-container bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          </div>
        </Reveal>

        {/* Main Content */}
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image/Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-neon-blue/40 shadow-xl">
              {/* Your Photo - Replace /profile.jpg with your image path */}

              <img
                src="/assests/img.jpg"
                alt="Fady Dieaa"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="absolute inset-0 hidden items-center justify-center"
                style={{ display: "none" }}
              >
                <span className="text-5xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-100">
              Fresh Graduate Developer with a passion for learning
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a dedicated junior full-stack developer specializing in the
              MERN stack. Recently completed an intensive 4-month program at ITI
              (Information Technology Institute) where I gained hands-on
              experience building modern web applications using React, Angular,
              Node.js, Express, and MongoDB.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in software development has equipped me with strong
              problem-solving skills and attention to detail. I'm passionate
              about writing clean, maintainable code and staying up-to-date with
              the latest web development trends. I thrive in collaborative
              environments and enjoy turning complex challenges into elegant
              solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">Fresh</div>
                <div className="text-gray-400 text-sm">Graduate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">3+</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">10+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>
          </div>
        </Reveal>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Reveal key={index} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="card-dark text-center group hover:scale-105">
                <div
                  className="inline-block p-4 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 
                            rounded-lg mb-4 group-hover:from-neon-blue/20 group-hover:to-neon-purple/20 transition-all"
                >
                  <item.icon className="text-neon-blue" size={32} />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-100">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
