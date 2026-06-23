import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiCalendar } from 'react-icons/hi'

const education = [
  {
    degree: 'Bachelor of Science - BS',
    field: 'Computer Science and Engineering',
    school: 'Manarat International University',
    duration: 'Apr 2021 - Jun 2025',
    grade: 'CGPA: 3.90 / 4.00',
    highlights: ['Data Structures', 'Programming', 'Software Engineering', 'Database Systems'],
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary School',
    field: 'Science',
    school: 'Govt. Sundarban Adarsha College',
    duration: 'Aug 2018 - Apr 2020',
    grade: 'Completed',
    highlights: ['Science Stream', 'Mathematics', 'Physics', 'Chemistry'],
    icon: '📚',
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-slate-800/50">
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
              <span className="text-cyan-400">Education</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/50 hover:border-cyan-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{edu.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-cyan-400 font-medium mb-2">{edu.field}</p>
                <p className="text-purple-400 mb-3">{edu.school}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <HiCalendar className="text-gray-500" />
                  <span>{edu.duration}</span>
                </div>
                
                <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full mb-4 border border-green-500/30">
                  {edu.grade}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-slate-600/50 text-gray-300 text-xs rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}