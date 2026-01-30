import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from './lib/supabase'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ValueProposition from './components/ValueProposition'
import GamificationSection from './components/GamificationSection'
import PricingSection from './components/PricingSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import Dashboard from './components/Dashboard'

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const handleLoginClick = () => {
    setShowAuthModal(true)
  }

  const handleAuthSuccess = (authUser) => {
    setUser(authUser)
    setShowAuthModal(false)
  }

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan)
    setShowAuthModal(true)
  }

  const handleLogout = () => {
    setUser(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </motion.div>
      </div>
    )
  }

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />
  }

  return (
    <div className="min-h-screen">
      <Header onLoginClick={handleLoginClick} />

      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <HeroSection onGetStarted={handleLoginClick} />
          <ValueProposition />
          <GamificationSection />
          <PricingSection onSelectPlan={handleSelectPlan} />
          <FinalCTA onGetStarted={handleLoginClick} />
          <Footer />
        </motion.main>
      </AnimatePresence>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  )
}