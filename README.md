# Conquiste seu Mapa

Uma landing page de vendas e portal de acesso para uma assessoria de corrida gamificada.

## Sobre o Projeto

Conquiste seu Mapa transforma cada passo em conquista. Cada corrida em território. É uma plataforma que gamifica a experiência de corrida, permitindo que corredores iniciantes e sedentários criem o hábito de se exercitar de forma acolhedora e motivadora.

## Funcionalidades

- Landing page moderna e responsiva
- Seção Hero com mensagem impactante
- Apresentação da proposta de valor
- Seção de gamificação explicando o sistema de conquistas
- Tabela de preços comparativa (Free vs Premium vs Anual)
- Sistema de autenticação completo com Supabase
- Dashboard de boas-vindas para usuários logados
- Design mobile-first
- Animações suaves com Framer Motion

## Tecnologias Utilizadas

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (ícones)
- Supabase (autenticação e banco de dados)

## Configuração

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Para gerar o build de produção:
   ```bash
   npm run build
   ```

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx              # Cabeçalho com navegação
│   ├── HeroSection.jsx         # Seção hero principal
│   ├── ValueProposition.jsx    # Cards de proposta de valor
│   ├── GamificationSection.jsx # Explicação da gamificação
│   ├── PricingSection.jsx      # Tabela de preços
│   ├── Footer.jsx              # Rodapé
│   ├── AuthModal.jsx           # Modal de login/registro
│   └── Dashboard.jsx           # Dashboard do usuário
├── lib/
│   └── supabase.js             # Cliente Supabase
├── App.jsx                     # Componente principal
├── main.jsx                    # Entry point
└── index.css                   # Estilos globais
```

## Banco de Dados

O projeto utiliza Supabase com as seguintes tabelas:

- `profiles`: Perfis de usuários
- `subscriptions`: Assinaturas e planos

Row Level Security (RLS) está habilitado em todas as tabelas para garantir a segurança dos dados.

## Design

O design segue princípios de UX modernos:
- Tom acolhedor e empático para iniciantes
- Foco em constância, não em performance extrema
- Cores verdes (primárias) evitando roxo e violeta
- Animações suaves de scroll reveal
- Design responsivo para todos os dispositivos
- Interface limpa e intuitiva

## Funcionalidades Implementadas

### Landing Page
- ✅ Navegação fixa com transição de fundo no scroll
- ✅ Hero Section com título impactante e estatísticas
- ✅ Seção "O Método" com 4 cards de proposta de valor
- ✅ Seção de Gamificação com passo a passo visual
- ✅ Tabela de preços (Free, Premium, Anual)
- ✅ CTA final antes do footer
- ✅ Footer completo com links sociais

### Autenticação
- ✅ Modal de login/registro com animações
- ✅ Integração com Supabase Auth
- ✅ Suporte para email/senha
- ✅ Preparado para integração com Strava
- ✅ Criação automática de perfil e assinatura

### Dashboard
- ✅ Tela de boas-vindas personalizada
- ✅ Cards de estatísticas
- ✅ Lista de próximos passos
- ✅ Integração com perfil do usuário
- ✅ Logout funcional

## Como Testar

1. Acesse a landing page
2. Navegue pelas seções usando o menu ou scroll
3. Clique em "Acessar Painel" ou "Começar Agora"
4. Crie uma conta com email e senha
5. Acesse o dashboard de boas-vindas
6. Faça logout para retornar à landing page

## Próximos Passos

- [ ] Integração real com API do Strava
- [ ] Implementação do sistema de mapas interativo
- [ ] Sistema de conquistas e troféus
- [ ] Modo multiplayer
- [ ] Histórico de corridas
- [ ] Gráficos de progresso
- [ ] Sistema de pagamento (Stripe)
- [ ] Planos de treino adaptativos com IA

## Licença

Todos os direitos reservados - 2024