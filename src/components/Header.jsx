import { useState, useEffect } from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ onLoginClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Conquiste seu Mapa
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('metodo')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              O Método
            </button>
            <button
              onClick={() => scrollToSection('precos')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Preços
            </button>
            <button
              onClick={onLoginClick}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Acessar Painel
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <button
                  onClick={() => scrollToSection('metodo')}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                >
                  O Método
                </button>
                <button
                  onClick={() => scrollToSection('precos')}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                >
                  Preços
                </button>
                <button
                  onClick={onLoginClick}
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
                >
                  Acessar Painel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}