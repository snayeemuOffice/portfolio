import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'

const experiences = [
  {
    title: 'Salesforce Developer I',
    company: 'Inovi Solutions',
    type: 'Full-time',
    duration: 'Apr 2025 - Present · 1 yr 3 mos',
    location: 'Dhaka, Bangladesh · Hybrid',
    description: 'Leading Salesforce development initiatives, building custom solutions, and contributing to enterprise-level implementations.',
    skills: ['Salesforce Development', 'Salesforce Administration', 'Salesforce Lightning', 'Apex', 'SOQL', 'Lightning Web Components'],
    current: true,
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
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
              Work <span className="text-cyan-400">Experience</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className={`relative mb-12 md:mb-0 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:mr-12' : 'md:pl-1/2 md:ml-12'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 z-10" />

                {/* Experience Card */}
                <motion.div
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all ml-8 md:ml-0"
                  whileHover={{ scale: 1.02 }}
                >
                  {exp.current && (
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full mb-3 border border-green-500/30">
                      Currently Working
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{exp.company} · {exp.type}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <HiCalendar className="text-purple-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HiLocationMarker className="text-purple-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}