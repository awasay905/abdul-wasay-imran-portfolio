import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Shield, Cpu, Brain, Zap, Award, MapPin, Calendar, GraduationCap, Briefcase, User, FileText } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      name: "GameCraft",
      description: "Full-stack game tracking and recommendation platform with wish-list, played list, friend activity, and personalized suggestions.",
      tech: ["React", "Node.js", "Oracle DB", "Express.js", "Python", "Koyeb", "Vercel"],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Vectorized Algorithm Library",
      description: "Implemented FFT, 2D-FFT, and matrix inversion in RISC-V vector assembly; achieved up to 20x speedup over scalar and 2x over Clang/GCC.",
      tech: ["RISC-V", "Assembly", "Python", "Make"],
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Java Paint",
      description: "Microsoft Paint clone in Java with layers, Bézier curves, custom UI library, and multiple design patterns implementation.",
      tech: ["Java", "Swing", "Design Patterns"],
      icon: <FileText className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Timetable Scheduler",
      description: "Python script that generates optimal timetables from course lists using constraint programming and data cleaning.",
      tech: ["Python", "Google OR-Tools", "Constraint Programming"],
      icon: <Calendar className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "SAP-1 CPU",
      description: "Complete implementation of SAP-1 (Simple As Possible) CPU architecture with custom instruction set.",
      tech: ["Digital Logic", "Assembly", "Computer Architecture"],
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "Huffman Tree Encoder",
      description: "Data compression algorithm achieving up to 50% compression using Huffman coding trees.",
      tech: ["Python", "Data Structures", "Algorithms"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-teal-500 to-green-500"
    },
    {
      name: "Neural Network Digit Recognition",
      description: "Basic digit recognition neural network built from scratch for handwritten digit classification.",
      tech: ["Python", "Neural Networks", "Machine Learning"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "RISC-V", "SQL", "TypeScript", "C", "C++"],
    "Web Development": ["HTML", "TailwindCSS", "React", "Node.js", "Express.js"],
    "Security Tools": ["Burpsuite", "Autopsy", "Nmap", "Metasploit", "Volatility"],
    "Other Technologies": ["Oracle DB", "Git", "Linux", "Docker", "AWS"]
  };

  const education = [
    {
      degree: "BS Computer Science",
      institution: "Institute of Business Administration Karachi",
      period: "2022 - 2026",
      details: ["CGPA: 3.86/4.0", "5th in Dean's List"],
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "Intermediate Pre-Engineering",
      institution: "Government Dehli College - Karachi",
      period: "2020 - 2022",
      details: ["93.45%", "Top 20 in Board of Intermediate Education Karachi"],
      icon: <Award className="w-5 h-5" />
    }
  ];

  const experience = [
    {
      role: "Teaching Assistant",
      company: "Computer Architecture and Assembly Language",
      period: "Jan 2025 - April 2025",
      details: [
        "Graded assignments, labs, quizzes, and final projects",
        "Conducted vivas alongside instructor",
        "Supported students in RISC-V vector extension programming"
      ],
      icon: <User className="w-5 h-5" />
    },
    {
      role: "Environmental Intern",
      company: "WWF Pakistan",
      period: "July 2024 - August 2024",
      details: [
        "Delivered ~40 hours of community service",
        "Repurposed fabric waste into tote bags for orphans",
        "Promoted sustainable reuse through environmental awareness"
      ],
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const certifications = [
    "Meta Frontend Developer - Coursera",
    "Meta Android Developer - Coursera",
    "IBM Cloud Computing - Coursera"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            top: '10%',
            left: '10%'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"
          style={{
            transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.03}px)`,
            top: '60%',
            right: '10%'
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abdul Wasay Imran
            </div>
            <div className="flex space-x-6">
              {['about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        {activeSection === 'about' && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="relative mb-8">
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <User className="w-20 h-20 text-gray-400" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Abdul Wasay Imran
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Computer Science Student & Full-Stack Developer
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Karachi, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">CGPA: 3.86/4.0</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                  <Award className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Dean's List</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:abdulwasay905@gmail.com"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <a
                  href="https://linkedin.com/in/abdul-wasay-imran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/awasay905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="min-h-screen py-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4`}>
                      {project.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{project.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="min-h-screen py-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      {category === 'Programming Languages' && <Code className="w-5 h-5 text-purple-400" />}
                      {category === 'Web Development' && <Zap className="w-5 h-5 text-blue-400" />}
                      {category === 'Security Tools' && <Shield className="w-5 h-5 text-red-400" />}
                      {category === 'Other Technologies' && <Database className="w-5 h-5 text-green-400" />}
                      {category}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-2 bg-gray-700/50 rounded-lg text-sm text-gray-300 border border-gray-600 hover:border-purple-500/50 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/50 rounded-lg p-4 border border-gray-600 hover:border-yellow-500/50 transition-all duration-300"
                    >
                      <p className="text-sm text-gray-300">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="min-h-screen py-20 px-6">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience & Education
              </h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                    Experience
                  </h3>
                  
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                            {exp.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                            <p className="text-purple-400 mb-2">{exp.company}</p>
                            <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                            <ul className="space-y-1">
                              {exp.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="text-gray-300 text-sm flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                    Education
                  </h3>
                  
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            {edu.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                            <p className="text-blue-400 mb-2">{edu.institution}</p>
                            <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                            <div className="flex flex-wrap gap-2">
                              {edu.details.map((detail, detailIndex) => (
                                <span
                                  key={detailIndex}
                                  className="px-3 py-1 bg-blue-600/20 rounded-full text-xs text-blue-300 border border-blue-600/30"
                                >
                                  {detail}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="min-h-screen py-20 px-6 flex items-center justify-center">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <a
                  href="mailto:abdulwasay905@gmail.com"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-500 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-gray-300 text-sm">abdulwasay905@gmail.com</p>
                </a>
                
                <a
                  href="tel:0349-0399-740"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-500 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p className="text-gray-300 text-sm">0349-0399-740</p>
                </a>
                
                <a
                  href="https://linkedin.com/in/abdul-wasay-imran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                  <p className="text-gray-300 text-sm">Connect with me</p>
                </a>
              </div>
              
              <div className="flex justify-center">
                <a
                  href="https://github.com/awasay905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
                >
                  <Github className="w-5 h-5" />
                  View My GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;