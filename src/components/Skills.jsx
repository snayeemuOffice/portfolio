import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'TypeScript', level: 75 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Django', level: 82 },
      { name: 'Node.js', level: 78 },
      { name: 'Python', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'Salesforce',
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'Salesforce Admin', level: 85 },
      { name: 'Lightning', level: 82 },
      { name: 'Apex', level: 78 },
      { name: 'SOQL', level: 80 },
      { name: 'Salesforce Dev', level: 83 },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Data Structures', level: 85 },
      { name: 'Agile/Scrum', level: 80 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-slate-900">
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
              My <span className="text-purple-400">Skills</span>
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
              Technologies and tools I've been working with
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              >
                <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
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