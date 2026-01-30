import { motion } from 'framer-motion'
import { MapPin, Trophy, TrendingUp, Users, LogOut } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function Dashboard({ user, onLogout }) {
  const handleLogout = async () => {
    await supabase.auth.signOut()
    onLogout()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-green-50">
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-green-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Conquiste seu Mapa</h1>
                <p className="text-sm text-gray-600">Bem-vindo, {user?.user_metadata?.full_name || user?.email}!</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary-500 to-green-600 rounded-3xl p-8 md:p-12 text-white mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sua jornada começa agora!
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Conecte seu Strava e comece a colorir o mapa mundial com suas corridas.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Conectar Strava
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={MapPin}
              title="Territórios"
              value="0"
              subtitle="Comece sua conquista"
              color="from-primary-500 to-green-600"
            />
            <StatCard
              icon={TrendingUp}
              title="Distância Total"
              value="0 km"
              subtitle="Primeiros passos"
              color="from-blue-500 to-cyan-600"
            />
            <StatCard
              icon={Trophy}
              title="Conquistas"
              value="0"
              subtitle="Desbloqueie troféus"
              color="from-orange-500 to-red-600"
            />
            <StatCard
              icon={Users}
              title="Ranking"
              value="-"
              subtitle="Corra para subir"
              color="from-pink-500 to-rose-600"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Próximos Passos</h3>

            <div className="space-y-4">
              <StepItem
                number="1"
                title="Conecte sua conta Strava"
                description="Sincronize automaticamente suas corridas"
                completed={false}
              />
              <StepItem
                number="2"
                title="Complete sua primeira corrida"
                description="Qualquer distância conta para começar"
                completed={false}
              />
              <StepItem
                number="3"
                title="Conquiste seu primeiro território"
                description="Veja o mapa ganhar cor com seu esforço"
                completed={false}
              />
              <StepItem
                number="4"
                title="Convide amigos para o multiplayer"
                description="A jornada é melhor acompanhada"
                completed={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, title, value, subtitle, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-sm text-gray-600 mb-1">{title}</div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-xs text-gray-500">{subtitle}</div>
    </motion.div>
  )
}

function StepItem({ number, title, description, completed }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
        completed
          ? 'bg-primary-500 text-white'
          : 'bg-gray-200 text-gray-600'
      }`}>
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}