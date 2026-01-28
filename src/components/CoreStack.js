import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiMongodb, SiDocker, SiPostman, SiMysql } from 'react-icons/si';
import Reveal from './Reveal';

const CoreStack = () => {
  const sections = [
    {
      title: 'Frontend',
      color: 'from-neon-blue to-cyan-400',
      items: [
        { name: 'React', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'JavaScript', icon: FaJsSquare },
        { name: 'Tailwind', icon: SiTailwindcss },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
      ],
    },
    {
      title: 'Backend',
      color: 'from-neon-purple to-purple-400',
      items: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express', icon: SiExpress },
      ],
    },
    {
      title: 'Database',
      color: 'from-neon-pink to-pink-400',
      items: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'SQL', icon: SiMysql },
      ],
    },
    {
      title: 'Dev Tools',
      color: 'from-neon-green to-green-400',
      items: [
        { name: 'Docker', icon: SiDocker },
        { name: 'Postman', icon: SiPostman },
      ],
    },
  ];

  return (
    <section id="stack" className="section-container bg-dark-card/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core <span className="gradient-text">Tech Stack</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Organized by what I use on the Frontend, Backend, and Database</p>
          </div>
        </Reveal>

        {(() => {
          const frontend = sections.find((s) => s.title === 'Frontend');
          const others = sections.filter((s) => s.title !== 'Frontend');
          return (
            <Reveal>
              <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: Stack Backend, Database, Dev Tools */}
              <div className="flex flex-col gap-8 order-1 md:order-none">
                {sections.filter(s => s.title !== 'Frontend').map((s, i) => (
                  <div key={i} className="card-dark">
                    <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                      {s.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {s.items.map((it, j) => (
                        <div
                          key={j}
                          className="card-dark group flex items-center gap-3 px-4 py-3 transition-all hover:scale-105 hover:-translate-y-0.5 hover:border-neon-blue/40 hover:shadow-neon-blue/20"
                        >
                          <div className="p-2 rounded-lg bg-dark-border group-hover:bg-neon-blue/10 transition-all ring-0 group-hover:ring-2 group-hover:ring-neon-blue/30">
                            <it.icon className="text-neon-blue transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" size={36} />
                          </div>
                          <span className="text-gray-200 text-lg font-semibold group-hover:text-neon-blue transition-colors">
                            {it.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Frontend full-height card */}
              <div className="card-dark h-full">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${frontend.color} bg-clip-text text-transparent`}>
                  {frontend.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {frontend.items.map((it, j) => (
                    <div
                      key={j}
                      className="card-dark group flex items-center gap-3 px-4 py-3 transition-all hover:scale-105 hover:-translate-y-0.5 hover:border-neon-blue/40 hover:shadow-neon-blue/20"
                    >
                      <div className="p-2 rounded-lg bg-dark-border group-hover:bg-neon-blue/10 transition-all ring-0 group-hover:ring-2 group-hover:ring-neon-blue/30">
                        <it.icon className="text-neon-blue transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" size={36} />
                      </div>
                      <span className="text-gray-200 text-lg font-semibold group-hover:text-neon-blue transition-colors">
                        {it.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </Reveal>
          );
        })()}

      </div>
    </section>
  );
};

export default CoreStack;
