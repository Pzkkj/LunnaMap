import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    period: 'para sempre',
    description: 'Experimente a gamificação',
    features: [
      { text: 'Conexão com Strava', included: true },
      { text: '30 dias de histórico', included: true },
      { text: 'Conquiste até 5 territórios', included: true },
      { text: 'IA adaptativa', included: false },
      { text: 'Modo multiplayer', included: false },
      { text: 'Histórico completo', included: false },
      { text: 'Conquistas ilimitadas', included: false },
    ],
    cta: 'Começar Grátis',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: 'R$ 22',
    period: '/mês',
    description: 'Desbloqueie todo o potencial',
    features: [
      { text: 'Conexão com Strava', included: true },
      { text: 'Histórico completo ilimitado', included: true },
      { text: 'Territórios ilimitados', included: true },
      { text: 'IA adaptativa inteligente', included: true },
      { text: 'Modo multiplayer com amigos', included: true },
      { text: 'Planos personalizados', included: true },
      { text: 'Suporte prioritário', included: true },
    ],
    cta: 'Assinar Agora',
    highlighted: true,
    badge: 'Mais Popular',
  },
  {
    name: 'Anual',
    price: 'R$ 19',
    period: '/mês',
    originalPrice: 'R$ 264',
    description: 'Economize 27% no plano anual',
    features: [
      { text: 'Tudo do Premium', included: true },
      { text: '2 meses grátis', included: true },
      { text: 'Pagamento único de R$ 228/ano', included: true },
      { text: 'Cancele quando quiser', included: true },
    ],
    cta: 'Assinar Anual',
    highlighted: false,
    badge: 'Melhor Custo-Benefício',
  },
]

function PricingCard({ plan, index, onSelect }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative bg-white rounded-2xl p-8 ${
        plan.highlighted
          ? 'ring-2 ring-primary-500 shadow-2xl scale-105'
          : 'shadow-lg hover:shadow-xl'
      } transition-all hover:-translate-y-1`}
    >
      {plan.badge && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${
          plan.highlighted ? 'bg-primary-500' : 'bg-gray-700'
        } text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}>
          <Sparkles className="w-4 h-4" />
          {plan.badge}
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

        <div className="flex items-end justify-center gap-1">
          <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
          <span className="text-gray-600 mb-2">{plan.period}</span>
        </div>

        {plan.originalPrice && (
          <div className="text-gray-500 line-through text-sm mt-1">
            {plan.originalPrice}
          </div>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            {feature.included ? (
              <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-primary-600" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 text-gray-400" />
              </div>
            )}
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-4 rounded-xl font-semibold transition-all ${
          plan.highlighted
            ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
        }`}
      >
        {plan.cta}
      </button>
    </motion.div>
  )
}

export default function PricingSection({ onSelectPlan }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Escolha seu{' '}
            <span className="text-primary-600">ritmo de conquista</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Comece grátis e desbloqueie recursos avançados quando estiver pronto.
            Sem compromisso, cancele quando quiser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
              onSelect={() => onSelectPlan(plan)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 text-gray-600"
        >
          <p className="text-sm">
            Todos os planos incluem acesso ao app mobile e web.
            Pagamento seguro e cancelamento a qualquer momento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}