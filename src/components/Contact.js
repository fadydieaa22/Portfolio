import React, { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import Reveal from "./Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "fadydieaa2@gmail.com",
      link: "mailto:fadydieaa2@gmail.com",
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+20 1092472063",
      link: "tel:+201092472063",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Monufia, Egypt",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section-container bg-dark-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Let's work together
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm a fresh graduate looking for opportunities to grow and contribute. 
                Whether it's an internship, entry-level position, or freelance project, 
                I'm eager to apply my skills and learn from experienced developers. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="card-dark flex items-center gap-4 group hover:scale-105 transition-all duration-300"
                >
                  <div
                    className="p-4 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 
                                rounded-lg group-hover:from-neon-blue/20 group-hover:to-neon-purple/20 transition-all"
                  >
                    <info.icon className="text-neon-blue text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="card-dark">
              <h4 className="text-gray-300 font-semibold mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/fadydieaa22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-dark-border rounded-lg text-gray-400 text-sm
                         hover:bg-neon-blue/20 hover:text-neon-blue hover:scale-105 transition-all duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/fady-dieaa-8b4261323/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-dark-border rounded-lg text-gray-400 text-sm
                         hover:bg-neon-blue/20 hover:text-neon-blue hover:scale-105 transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-dark">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg
                           text-gray-100 focus:border-neon-blue focus:outline-none focus:ring-2 
                           focus:ring-neon-blue/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg
                           text-gray-100 focus:border-neon-blue focus:outline-none focus:ring-2 
                           focus:ring-neon-blue/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg
                           text-gray-100 focus:border-neon-blue focus:outline-none focus:ring-2 
                           focus:ring-neon-blue/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg
                           text-gray-100 focus:border-neon-blue focus:outline-none focus:ring-2 
                           focus:ring-neon-blue/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 
                         disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Message */}
              {status === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
