import React from 'react';
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiVisualstudiocode, SiPostman, SiFigma, SiDocker, SiVercel, SiNpm } from 'react-icons/si';
import Reveal from './Reveal';

const DevTools = () => {
  const tools = [
    { name: 'Git', icon: FaGitAlt, color: 'text-[#F1502F]' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-200' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: 'text-[#22A6F2]' },
    { name: 'Postman', icon: SiPostman, color: 'text-[#FF6C37]' },
    { name: 'Figma', icon: SiFigma, color: 'text-[#F24E1E]' },
    { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
    { name: 'Vercel', icon: SiVercel, color: 'text-gray-200' },
    { name: 'npm', icon: SiNpm, color: 'text-[#CB0000]' },
  ];

  return (
    <section id="tools" className="section-container bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Development <span className="gradient-text">Tools</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Daily drivers I use to build, test and ship projects</p>
          </div>
        </Reveal>

        <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((t, i) => (
            <Reveal key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="card-dark group flex flex-col items-center justify-center gap-4 py-8 transition-all duration-300 hover:scale-105 hover:shadow-neon-blue/20 hover:border-neon-blue/40">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 transition-colors group-hover:from-neon-blue/20 group-hover:to-neon-purple/20">
                  <t.icon className={`${t.color}`} size={56} />
                </div>
                <span className="text-gray-200 text-lg font-semibold tracking-wide group-hover:text-neon-blue transition-colors">
                  {t.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevTools;
