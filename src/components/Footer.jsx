import { MapPin, Mail, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-green-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold">Conquiste seu Mapa</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforme cada passo em conquista. Cada corrida em território. Cada território em história.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#metodo" className="hover:text-primary-400 transition-colors">Como Funciona</a></li>
              <li><a href="#precos" className="hover:text-primary-400 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">App Mobile</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Conecte-se</h3>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">contato@conquisteseumapa.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>2024 Conquiste seu Mapa. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}