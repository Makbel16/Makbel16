// GitHubReadme.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaStar, 
  FaCodeBranch, FaEye, FaReact, FaNodeJs, 
  FaPython, FaJava, FaDatabase, FaGit,
  FaDocker, FaAws, FaVuejs, FaAngular
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiMongodb, SiPostgresql, SiExpress,
  SiNextdotjs, SiRedux, SiFirebase, SiDjango,
  SiFlask, SiMysql, SiJquery, SiBootstrap
} from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

const GitHubReadme = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animated background particles effect
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  const skills = {
    core: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 95 },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, level: 85 },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, level: 95 },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" />, level: 90 },
      { name: "Python", icon: <FaPython className="text-yellow-300" />, level: 80 },
      { name: "Java", icon: <FaJava className="text-red-400" />, level: 75 },
    ],
    frontend: [
      { name: "React", icon: <FaReact className="text-cyan-400" />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 80 },
      { name: "Vue.js", icon: <FaVuejs className="text-green-400" />, level: 70 },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, level: 88 },
      { name: "Redux", icon: <SiRedux className="text-purple-400" />, level: 82 },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" />, level: 85 },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 87 },
      { name: "Express", icon: <SiExpress className="text-gray-400" />, level: 85 },
      { name: "Django", icon: <SiDjango className="text-green-600" />, level: 70 },
      { name: "Flask", icon: <SiFlask className="text-gray-300" />, level: 65 },
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 82 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, level: 80 },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: 78 },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 75 },
    ],
    tools: [
      { name: "Git", icon: <FaGit className="text-orange-500" />, level: 88 },
      { name: "Docker", icon: <FaDocker className="text-blue-400" />, level: 70 },
      { name: "AWS", icon: <FaAws className="text-yellow-400" />, level: 65 },
    ],
  };

  const projects = [
    {
      name: "Car Rental Management System",
      description: "Advanced Java application with JavaFX for vehicle tracking, customer management, and booking system",
      tech: ["Java", "JavaFX", "MySQL"],
      stars: 1,
      forks: 0,
      language: "Java",
      url: "https://github.com/Makbel16/CarRentalManagementSystem_Using_JAVAFX-CRMS",
      color: "from-orange-500 to-red-500",
      icon: "🚗"
    },
    {
      name: "Data Structure & Algorithm Practice",
      description: "Collection of DSA implementations in Jupyter Notebook covering searching and sorting algorithms",
      tech: ["Python", "Jupyter", "Algorithms"],
      stars: 0,
      forks: 0,
      language: "Jupyter Notebook",
      url: "https://github.com/Makbel16/Data-structure-and-algorithm-lab-practice",
      color: "from-blue-500 to-cyan-500",
      icon: "📊"
    },
    {
      name: "Java Programming Lab",
      description: "Java programming exercises and lab practices covering OOP concepts and data structures",
      tech: ["Java", "OOP", "Data Structures"],
      stars: 0,
      forks: 0,
      language: "Java",
      url: "https://github.com/Makbel16/java-programming",
      color: "from-red-500 to-pink-500",
      icon: "☕"
    },
    {
      name: "Data Structure & Algorithm",
      description: "Advanced DSA implementations and algorithm analysis",
      tech: ["Python", "Algorithms", "Data Structures"],
      stars: 0,
      forks: 0,
      language: "Jupyter Notebook",
      url: "https://github.com/Makbel16/Data-Structure-and-Algorithm",
      color: "from-purple-500 to-indigo-500",
      icon: "🔢"
    }
  ];

  const achievements = [
    { icon: "🏆", label: "81+ Contributions", color: "from-yellow-400 to-orange-400" },
    { icon: "📚", label: "4 Public Repos", color: "from-blue-400 to-cyan-400" },
    { icon: "⭐", label: "Active Learner", color: "from-purple-400 to-pink-400" },
    { icon: "💻", label: "CS Student", color: "from-green-400 to-emerald-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-emerald-400/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Animated Title */}
          <TypeAnimation
            sequence={[
              '🚀 WELCOME TO MY DEVELOPER SPACE',
              2000,
              'MAKBEL KEBEDE',
              2000,
              'COMPUTER SCIENCE STUDENT | FULL STACK DEVELOPER',
              2000,
              'BUILDING REAL WORLD SOLUTIONS WITH CODE',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent mb-6"
          />

          {/* Profile Image with Glow */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="relative w-48 h-48 mx-auto mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 rounded-full animate-spin-slow blur-xl" />
            <div className="absolute inset-2 bg-gray-900 rounded-full overflow-hidden">
              <img
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Developer Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 p-8 rounded-3xl border border-emerald-500/30 backdrop-blur-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              FULL STACK DEVELOPER | CS STUDENT
            </h2>
            <p className="text-gray-300">
              PASSIONATE ABOUT WEB TECHNOLOGIES & SOFTWARE ENGINEERING
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${achievement.color} p-6 rounded-2xl text-center relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="text-lg font-bold text-white">{achievement.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-emerald-400 rounded-full" />
            ABOUT ME
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                👨‍🎓 Computer Science Student & Developer
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">»</span>
                  Currently pursuing a degree in Computer Science with focus on software engineering
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">»</span>
                  Full Stack Developer specializing in modern web technologies
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">»</span>
                  Passionate about creating efficient, scalable, and user-friendly applications
                </p>
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-teal-400 mb-4">🎯 Current Focus</h3>
              <ul className="space-y-3">
                {[
                  "Full-Stack Web Development",
                  "Responsive UI/UX Design",
                  "Database Management",
                  "RESTful APIs Development",
                  "Advanced React Patterns",
                  "Cloud Deployment (AWS/Docker)",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-emerald-400 rounded-full" />
            TECH STACK
          </h2>

          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + categoryIndex * 0.1 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-emerald-400 mb-4 capitalize">
                {category} Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <div className="relative z-10">
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <div className="text-sm font-semibold text-white mb-2">{skill.name}</div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: 0.8 + index * 0.05, duration: 1 }}
                          className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-emerald-400 rounded-full" />
            FEATURED PROJECTS
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`text-4xl bg-gradient-to-r ${project.color} p-3 rounded-xl`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-700 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" /> {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch className="text-gray-400" /> {project.forks}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {project.language}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Currently Working On */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1 }}
          className="mb-20 p-8 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl border border-emerald-500/30 backdrop-blur-sm text-center"
        >
          <h3 className="text-2xl font-bold text-emerald-400 mb-6">🚧 CURRENTLY WORKING ON</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Learning advanced React patterns and state management",
              "Building a real-time chat application with Socket.io",
              "Exploring cloud deployment with AWS/Docker",
              "Contributing to open-source projects",
              "Preparing for software engineering interviews",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="flex items-center gap-2 text-gray-300 bg-gray-800/30 p-3 rounded-xl"
              >
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Goals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3 }}
          className="mb-20 text-center p-8 bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">📈 DEVELOPMENT GOALS</h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            "As a Computer Science student and developer, I'm focused on mastering modern web technologies,
            building practical applications, and contributing to meaningful projects.
            My goal is to become a skilled software engineer who can solve real-world problems with elegant code."
          </p>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
            <span className="w-1 h-8 bg-emerald-400 rounded-full" />
            CONNECT WITH ME
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:makbelkebede35@gmail.com"
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white font-semibold flex items-center gap-2"
            >
              <FaEnvelope /> makbelkebede35@gmail.com
            </motion.a>
            <motion.a
              href="https://github.com/Makbel16"
              target="_blank"
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-white font-semibold flex items-center gap-2"
            >
              <FaGithub /> Makbel16
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/makbel-kebede"
              target="_blank"
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold flex items-center gap-2"
            >
              <FaLinkedin /> Makbel Kebede
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-20 text-center"
        >
          <TypeAnimation
            sequence={[
              'ALWAYS LEARNING... ALWAYS BUILDING... ALWAYS CODING',
              2000,
              'OPEN TO COLLABORATIONS AND NEW OPPORTUNITIES',
              2000,
              'LET\'S CREATE SOMETHING AMAZING TOGETHER 💻',
              2000,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-lg text-emerald-400"
          />
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 text-4xl"
          >
            👋
          </motion.div>
        </motion.div>
      </div>

      {/* Style for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GitHubReadme;
