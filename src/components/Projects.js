import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiCode, FiCheck } from "react-icons/fi";
import Reveal from "./Reveal";

// Removed unused ParallaxImage component - now using simple img with zoom

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "MealsApp",
      description:
        "MealsApp lets you explore global flavors with thousands of easy recipes—search by name, filter by category, and save your favorites, all powered by TheMealDB API. 🍽️🌍",
      detailedDescription:
        "A comprehensive recipe discovery platform that brings the world's cuisines to your fingertips. Built with modern React practices and responsive design principles.",
      image: "/assests/MealsApp.jpg",
      emoji: "🍽️",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"],
      category: "frontend",
      github: "https://github.com/fadydieaa22/Meal-Project",
      demo: "https://meal-project-livid.vercel.app",
      featured: true,
      keyFeatures: [
        "Search through thousands of recipes by name or ingredient",
        "Filter recipes by categories and cuisines",
        "Save and manage your favorite recipes",
        "Detailed recipe instructions with ingredients list",
        "Responsive design optimized for all devices",
        "Fast and smooth user experience with React"
      ],
    },
    // {
    //   title: "Angular Web Application",
    //   description:
    //     "A dynamic single-page application built with Angular framework. Implements routing, services, reactive forms, and component communication. Showcases TypeScript usage and Angular best practices.",
    //   image: "/projects/angular-project.jpg", // Add image to /public/projects/angular-project.jpg
    //   emoji: "🅰️",
    //   tags: ["Angular", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
    //   category: "frontend",
    //   github: "https://github.com/fadydieaa22/angular-project",
    //   demo: "#",
    //   featured: true,
    // },
    {
      title: "Devconnect",
      description:
        "DevConnect is a social platform for developers built with the MERN stack. It blends LinkedIn and GitHub, letting users showcase projects, follow others, and chat in real time via Socket.io.",
      detailedDescription:
        "A full-stack social networking platform designed specifically for developers. Combines professional networking with real-time collaboration features.",
      image: "/assests/DevConnect.jpg",
      emoji: "🚀",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      category: "fullstack",
      github: "https://github.com/fadydieaa22/Devconnect.git",
      demo: "https://devconnect-xi-woad.vercel.app/",
      featured: true,
      keyFeatures: [
        "Real-time chat and notifications using Socket.io",
        "User authentication with JWT tokens",
        "Project showcase with multi-image uploads",
        "Follow system and social feed",
        "30+ RESTful API endpoints",
        "Responsive UI with React and Tailwind CSS",
        "MongoDB database with optimized queries"
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const featuredProjects = projects.filter(
    (p) => p.featured && (filter === "all" || p.category === filter),
  );
  const nonFeaturedFiltered = (
    filter === "all" ? projects : projects.filter((p) => p.category === filter)
  ).filter((p) => !p.featured);

  return (
    <section id="projects" className="section-container bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/30"
                  : "bg-dark-card border border-dark-border text-gray-400 hover:border-neon-blue hover:text-neon-blue"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured list: image left, details right */}
        <div className="space-y-12 mb-12">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <Reveal
                key={index}
                className="relative overflow-visible"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className={`grid md:grid-cols-5 gap-8 items-center`}
                >
                  {/* Image (left on even, right on odd) */}
                  <div
                    className={`md:col-span-2 ${isEven ? "md:order-1" : "md:order-2"}`}
                  >
                    <div className="block group/image cursor-default">
                      <div className="relative rounded-2xl overflow-hidden border-4 border-dark-border group-hover/image:border-neon-blue shadow-2xl group-hover/image:shadow-neon-blue/30 transition-all duration-500" style={{ aspectRatio: '4/5' }}>
                        <div className="overflow-hidden rounded-xl h-full">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                        </div>
                        <div
                          className="absolute inset-0 hidden items-center justify-center text-8xl animate-float"
                          style={{ display: "none" }}
                        >
                          {project.emoji}
                        </div>
                        <div className="absolute inset-0 bg-dark-bg/0 group-hover/image:bg-dark-bg/5 transition-all duration-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`md:col-span-3 ${isEven ? "md:order-2" : "md:order-1"} relative z-10`}
                  >
                    <div className="bg-dark-card/90 backdrop-blur-md border-2 border-dark-border rounded-xl p-6 shadow-xl hover:shadow-neon-blue/20 hover:border-neon-blue/50 transition-all duration-500 hover:scale-[1.02]">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <p className="text-neon-blue text-xs font-mono tracking-wider uppercase mb-2">
                            0{index + 1}. Featured Project
                          </p>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mt-1 mb-2 hover:text-neon-blue transition-colors leading-tight">
                              {project.title}
                            </h3>
                          </a>
                          <p className="text-gray-300 text-sm md:text-base italic font-light">
                            {project.detailedDescription}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-5 bg-dark-bg/40 rounded-lg p-4 border border-dark-border/50 hover:border-neon-purple/30 transition-all duration-300">
                        <h4 className="text-sm md:text-base font-bold text-neon-purple mb-3 flex items-center gap-2">
                          <span className="w-1 h-4 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full"></span>
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.keyFeatures.slice(0, 6).map((feature, fIndex) => (
                            <li
                              key={fIndex}
                              className="flex items-start gap-2 text-xs md:text-sm text-gray-400 hover:text-gray-200 transition-colors"
                            >
                              <FiCheck className="text-neon-blue mt-0.5 flex-shrink-0" size={14} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1.5 bg-dark-border text-gray-300 text-xs md:text-sm rounded-full hover:bg-neon-blue/10 hover:text-neon-blue transition-colors tag-chip font-medium"
                            style={{ animationDelay: `${tagIndex * 80}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm md:text-base font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-neon-purple/60 hover:scale-105"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          <FiExternalLink className="relative z-10 group-hover:rotate-12 transition-transform duration-300" size={18} />
                          <span className="relative z-10">Live Demo</span>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex-1 flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-neon-blue text-neon-blue text-sm md:text-base font-bold rounded-lg overflow-hidden transition-all duration-300 hover:bg-neon-blue hover:text-dark-bg hover:scale-105 hover:shadow-xl hover:shadow-neon-blue/60"
                        >
                          <FiGithub className="group-hover:rotate-12 transition-transform duration-300" size={18} />
                          <span>View Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Projects Grid for non-featured */}
        {nonFeaturedFiltered.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonFeaturedFiltered.map((project, index) => (
              <Reveal
                key={index}
                className="card-dark group hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image/Icon */}
                <div className="relative mb-5 aspect-video bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 rounded-xl overflow-hidden border-3 border-dark-border group-hover:border-neon-blue shadow-xl group-hover:shadow-neon-blue/30 transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="absolute inset-0 hidden items-center justify-center text-8xl animate-float"
                    style={{ display: "none" }}
                  >
                    {project.emoji}
                  </div>
                  {/* Hover overlay with quick actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn px-5 py-2.5 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold hover:shadow-xl hover:shadow-neon-purple/60 transition-all duration-300 transform hover:scale-125"
                    >
                      <FiExternalLink className="inline mr-1.5 group-hover/btn:rotate-12 transition-transform" size={18} />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn px-5 py-2.5 rounded-lg border-2 border-neon-blue text-neon-blue font-bold hover:bg-neon-blue hover:text-dark-bg hover:shadow-xl hover:shadow-neon-blue/60 transition-all duration-300 transform hover:scale-125"
                    >
                      <FiGithub className="inline mr-1.5 group-hover/btn:rotate-12 transition-transform" size={18} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                {project.detailedDescription && (
                  <p className="text-gray-500 text-xs italic mb-2">
                    {project.detailedDescription}
                  </p>
                )}
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features - Show top 4 for cards */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="mb-4 bg-dark-bg/30 rounded-lg p-3 border border-dark-border/50">
                    <h4 className="text-xs font-semibold text-neon-purple mb-2 flex items-center gap-1">
                      <span className="w-1 h-3 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full"></span>
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.keyFeatures.slice(0, 4).map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors"
                        >
                          <FiCheck className="text-neon-blue mt-0.5 flex-shrink-0" size={12} />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-dark-border text-gray-400 text-xs rounded-full group-hover:bg-neon-blue/10 group-hover:text-neon-blue transition-colors tag-chip"
                      style={{ animationDelay: `${tagIndex * 80}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-dark-border">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 hover:scale-105"
                  >
                    <FiExternalLink className="group-hover/link:rotate-12 transition-transform" size={16} />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-neon-blue text-neon-blue text-sm font-semibold rounded-lg hover:bg-neon-blue hover:text-dark-bg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 hover:scale-105"
                  >
                    <FiGithub className="group-hover/link:rotate-12 transition-transform" size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/fadydieaa22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neon-blue text-neon-blue 
                     font-semibold rounded-lg hover:bg-neon-blue hover:text-dark-bg transition-all duration-300"
          >
            <FiCode size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
