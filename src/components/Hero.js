import React, { useEffect, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowDown,
} from "react-icons/fi";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    // Wait 3.5 seconds (3 seconds loading + 0.5 second buffer) before starting typing
    const startTimer = setTimeout(() => {
      setStartTyping(true);
    }, 3500);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!startTyping) return; // Don't start typing until loading is done

    const roles = [
      "Junior Full-Stack Developer",
      "MERN Stack Enthusiast",
      "Problem Solver",
      "Fresh Graduate",
    ];

    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, startTyping]);

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/fadydieaa22", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/fady-dieaa-8b4261323/", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:fadydieaa2@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="section-container text-center">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Greeting */}
          <div className="inline-block">
            <p className="text-neon-blue text-lg md:text-xl font-mono mb-4 animate-pulse">
              Hi there! 👋
            </p>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            I'm <span className="gradient-text">Fady Dieaa</span>
          </h1>

          {/* Typing Animation */}
          <div className="h-12 md:h-16">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
              <span className="gradient-text">{text}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Fresh graduate passionate about building modern web applications with the MERN stack. 
            ITI graduate with hands-on experience in React, Angular, Node.js, and MongoDB.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg
                       transition-all duration-300 hover:bg-neon-blue hover:text-dark-bg
                       flex items-center gap-2"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-card border border-dark-border
                         hover:border-neon-blue hover:text-neon-blue transition-all duration-300
                         hover:scale-110 hover:shadow-lg hover:shadow-neon-blue/30"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-neon-blue">
            <FiArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
