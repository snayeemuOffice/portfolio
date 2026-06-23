import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Sportify',
    description: 'A full-stack website to manage a sports academy. Features include booking systems, player management, and admin dashboard.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js'],
    duration: 'Jul 2023 - Jun 2024',
    github: 'https://github.com',
    live: '#',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Salesforce CRM Solution',
    description: 'Enterprise-level Salesforce implementation for client management, lead tracking, and automated workflows.',
    tags: ['Salesforce', 'Apex', 'Lightning', 'SOQL', 'Flow Builder'],
    duration: '2025',
    github: '#',
    live: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React frontend, Django backend, and integrated payment processing.',
    tags: ['React.js', 'Django', 'Python', 'PostgreSQL', 'Stripe'],
    duration: '2024',
    github: 'https://github.com',
    live: '#',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team features, and analytics dashboard.',
    tags: ['React.js', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    duration: '2024',
    github: 'https://github.com',
    live: '#',
    color: 'from-orange-500 to-red-500',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              My <span className="text-purple-400">Projects</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <motion.p
              className="mt-4 text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Here are some of my recent projects that showcase my skills
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Project Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-500">{project.duration}</span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub size={18} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <HiExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}