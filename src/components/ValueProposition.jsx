import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Activity, Brain, Heart, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Conexão com Strava',
    description: 'Sincronização automática com seu app favorito. Sem precisar registrar nada duas vezes. Seus treinos fluem naturalmente para o mapa.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Brain,
    title: 'IA que Entende Você',
    description: 'Perdeu um treino? Sem culpa. Nosso plano se adapta à sua realidade, ajustando metas e mantendo você motivado sem pressão.',
    color: 'from-primary-500 to-green-500'
  },
  {
    icon: Heart,
    title: 'Feedback Humano',
    description: 'Não é apenas sobre números. Receba mensagens acolhedoras que celebram cada passo, reconhecem seus esforços e te lembram: você está indo bem.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Activity,
    title: 'Progresso Visual',
    description: 'Veja o mundo ganhar cor com cada corrida. Territórios conquistados são medalhas permanentes da sua jornada. Seu mapa, sua história.',
    color: 'from-blue-500 to-cyan-500'
  }
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
        <feature.icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {feature.title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}

export default function ValueProposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="metodo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Um método que respeita{' '}
            <span className="text-primary-600">seu ritmo</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Não é sobre bater recordes. É sobre criar o hábito de se movimentar,
            celebrar cada pequena vitória e construir uma relação saudável com a corrida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}