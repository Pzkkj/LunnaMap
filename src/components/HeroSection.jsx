import { motion } from 'framer-motion'
import { ArrowRight, Map, Zap } from 'lucide-react'

export default function HeroSection({ onGetStarted }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-green-50 pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4" />
              <span>Transforme cada passo em conquista</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Não é sobre correr{' '}
              <span className="text-primary-600">mais rápido</span>,<br />
              é sobre{' '}
              <span className="bg-gradient-to-r from-primary-600 to-green-600 bg-clip-text text-transparent">
                não desistir
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conquiste seu Mapa transforma seus passos em cores no mapa mundial.
              Cada corrida pinta um novo território. Cada território conta sua história.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={onGetStarted}
                className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById('metodo').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center gap-2"
              >
                <Map className="w-5 h-5" />
                Como Funciona
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600">+10k</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">Corredores</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600">150+</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">Países</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600">2.5M</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">km Percorridos</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}