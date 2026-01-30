import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const benefits = [
  'Comece grátis, sem cartão de crédito',
  'Cancele quando quiser',
  'Suporte humanizado e acolhedor',
]

export default function FinalCTA({ onGetStarted }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-green-600 opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-primary-600 to-green-600 bg-clip-text text-transparent">
              começar sua jornada?
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 10.000 corredores que já transformaram seus passos em conquistas.
            Comece hoje, no seu ritmo.
          </p>

          <div className="flex flex-col items-center gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={onGetStarted}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group bg-primary-600 hover:bg-primary-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl hover:shadow-primary-600/50 flex items-center gap-3 mx-auto"
          >
            Criar Minha Conta Grátis
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <p className="text-sm text-gray-500 mt-6">
            Sem compromisso. Cancele quando quiser.
          </p>
        </motion.div>
      </div>
    </section>
  )
}