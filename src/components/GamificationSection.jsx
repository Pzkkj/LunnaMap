import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPinned, Trophy, Globe, Users } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MapPinned,
    title: 'Corra onde quiser',
    description: 'Qualquer corrida conta. Na rua, na esteira, no parque. Cada quilômetro é uma conquista.',
  },
  {
    number: '02',
    icon: Globe,
    title: 'Pinte o mapa',
    description: 'Suas corridas colorem territórios no mapa mundial. Cada região conquistada fica registrada para sempre.',
  },
  {
    number: '03',
    icon: Trophy,
    title: 'Conquiste troféus',
    description: 'Desbloqueie conquistas únicas. De iniciante a explorador mundial, cada marco é celebrado.',
  },
  {
    number: '04',
    icon: Users,
    title: 'Cresça junto',
    description: 'No modo multiplayer, convide amigos e conquistem territórios juntos. A jornada é melhor acompanhada.',
  },
]

export default function GamificationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Trophy className="w-4 h-4" />
            <span>Modo Game</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforme corridas em{' '}
            <span className="bg-gradient-to-r from-primary-600 to-green-600 bg-clip-text text-transparent">
              conquistas visuais
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Cada corrida adiciona cor ao seu mapa pessoal. Veja o mundo se transformar
            sob seus pés. Seu progresso nunca foi tão gratificante.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-primary-500 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Seu orgulho em cada território conquistado
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Não é apenas sobre correr. É sobre ver sua jornada tomar forma,
              construir um legado visual e sentir orgulho de cada passo dado.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">195 países disponíveis</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">7 continentes para explorar</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Infinitas possibilidades</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="relative mb-6">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-green-600 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform">
          <step.icon className="w-10 h-10 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-primary-600 border-4 border-primary-100">
          {step.number}
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {step.title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  )
}