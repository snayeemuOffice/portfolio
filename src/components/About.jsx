import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiLightBulb, HiUsers, HiStar } from 'react-icons/hi'

const stats = [
  { icon: HiCode, value: '5+', label: 'Projects Completed' },
  { icon: HiLightBulb, value: '3+', label: 'Years Experience' },
  { icon: HiUsers, value: '372', label: 'Connections' },
  { icon: HiStar, value: '3.90', label: 'CGPA' },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-slate-800/50">
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
              About <span className="text-cyan-400">Me</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                A Passionate Developer Based in <span className="text-cyan-400">Dhaka, Bangladesh</span>
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I am Shaikh Nayeem Uddin, a proficient MERN Stack developer and Salesforce Developer 
                  currently working at Inovi Solutions. With a strong foundation in Computer Science and 
                  Engineering, I bring a blend of technical expertise and creative problem-solving to every project.
                </p>
                <p>
                  My journey in tech has been driven by curiosity and a passion for building solutions that 
                  make a difference. From developing full-stack web applications to working with Salesforce 
                  ecosystems, I constantly strive to expand my skill set and tackle new challenges.
                </p>
                <p>
                  When I'm not coding, you can find me engaging in problem-solving activities, 
                  participating in sports, or exploring new technologies that can enhance my development toolkit.
                </p>
              </div>
              
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                {['React.js', 'Django', 'Salesforce', 'MongoDB', 'Node.js', 'JavaScript'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-slate-700/50 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600/50 hover:border-cyan-500/50 transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <stat.icon className="text-3xl text-cyan-400 mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}