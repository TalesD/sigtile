# 🎯 Flooring Quiz - Lead Qualification System

## Overview
O Quiz de Piso da SigTile é uma ferramenta moderna e intuitiva para qualificar leads e entender o perfil dos clientes. Não é apenas um quiz - é um sistema de descoberta de necessidades que guia o cliente através de perguntas estratégicas.

## 🎨 Design & UX

### Características Principais:
- ✅ **Interface Moderna**: Design clean com gradientes suaves e animações fluidas
- ✅ **Mobile-First**: Totalmente responsivo para todos os dispositivos
- ✅ **Micro-interações**: Animações com Framer Motion para feedback visual
- ✅ **Progresso Visual**: Barra de progresso e indicadores de etapa
- ✅ **Auto-avanço**: Avança automaticamente após seleção (UX otimizada)
- ✅ **Navegação Flexível**: Botões "Previous" e "Next" para controle total

## 📋 Estrutura das Perguntas

### 1️⃣ Qual cômodo você está procurando?
**Objetivo**: Segmentar o caso de uso e recomendar produtos com durabilidade correta

**Opções**:
- 🏠 Living Room / Bedrooms
- 🍳 Kitchen / Laundry Room
- 🚿 Bathroom / Wet Areas
- 🏢 Commercial Space / Office
- 🌳 Entire Home / Full Project

**Insights**: Identifica necessidades de resistência à água, tráfego e durabilidade.

---

### 2️⃣ Qual é o seu estilo preferido?
**Objetivo**: Focar em estética e filtrar cores e texturas

**Opções**:
- 🪵 Modern & Minimal (Neutral tones, clean lines)
- 🌿 Cozy & Rustic (Textured, wood & stone looks)
- ✨ Classic & Elegant (Marble looks, decorative patterns)
- 🎨 Creative & Colorful (Vibrant colors, bold patterns)
- 😎 I'm not sure yet, I want to see options

**Insights**: Define a paleta de cores e estilo visual do cliente.

---

### 3️⃣ Qual é o recurso MAIS importante para você?
**Objetivo**: Qualificar a necessidade primária e direcionar para a categoria certa

**Opções**:
- 💎 Durability & High Resistance (for high-traffic areas)
- 💦 Water Resistance (ideal for bathrooms, kitchens)
- 🤗 Comfort & Warmth (warmer, softer underfoot)
- 💰 Budget-Friendly Value (beauty with a great price)
- 🌱 Eco-Friendly & Natural (natural or sustainable products)

**Insights**: Revela a prioridade principal do cliente (preço, qualidade, sustentabilidade, etc.).

---

### 4️⃣ Quanto à manutenção, você prefere:
**Objetivo**: Eliminar opções que não se encaixam no estilo de vida do cliente

**Opções**:
- 🧼 Easy Cleaning (quick and practical)
- 🛡️ Low Maintenance (no waxing or refinishing needed)
- ✨ Periodic Care (willing to maintain for long-term beauty)
- 🔧 Not a big concern (as long as it looks beautiful)

**Insights**: Define o nível de comprometimento com manutenção.

---

### 5️⃣ Qual é a sua faixa de orçamento estimada?
**Objetivo**: Pergunta crucial para qualificação de leads

**Opções**:
- 💵 Budget-Friendly (Best options in tile and laminate)
- 💵💵 Mid-Range (Great value in luxury vinyl and porcelain)
- 💵💵💵 Premium (High-end products like hardwood and special porcelain)
- 🤫 Prefer to discuss later (After choosing a product)

**Insights**: Qualifica o poder de compra e expectativas de investimento.

## 🎯 Fluxo do Usuário

```
Landing Page → "Take the Quiz" CTA
    ↓
Quiz Intro (Logo + Progress)
    ↓
Question 1 (Room Selection)
    ↓
Question 2 (Style Preference)
    ↓
Question 3 (Priority Feature)
    ↓
Question 4 (Maintenance)
    ↓
Question 5 (Budget)
    ↓
Processing Animation
    ↓
Success Screen + Next Steps
    ↓
Call to Action (Phone + Back Home)
```

## 💡 Funcionalidades Técnicas

### Estado e Dados:
```javascript
const [currentStep, setCurrentStep] = useState(0);
const [answers, setAnswers] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isComplete, setIsComplete] = useState(false);
```

### Auto-avanço Inteligente:
```javascript
const handleAnswer = (value) => {
  setAnswers({ ...answers, [currentQuestion.id]: value });
  
  setTimeout(() => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit({ ...answers, [currentQuestion.id]: value });
    }
  }, 300);
};
```

### Animações:
- **Entrada**: Fade in + slide from right
- **Saída**: Fade out + slide to left
- **Seleção**: Scale up + border highlight
- **Progresso**: Smooth width transition

## 📊 Tela de Conclusão

### Elementos:
1. ✅ **Ícone de Sucesso**: CheckCircle animado
2. 📝 **Mensagem de Confirmação**: "Perfect! We've Got Your Profile!"
3. 📋 **Próximos Passos**:
   - 📞 Contato em 24 horas
   - 📋 Estimativa gratuita
   - 🎨 Opções personalizadas
4. 🎯 **CTAs**:
   - Botão de ligação: `tel:7325586559`
   - Link para home

## 🔧 Integração com Backend

### Dados Coletados:
```javascript
{
  1: "living_bedroom",      // Room type
  2: "modern_minimal",       // Style preference
  3: "water_resistance",     // Priority feature
  4: "easy_cleaning",        // Maintenance preference
  5: "mid_range"             // Budget range
}
```

### Próximos Passos de Integração:
1. **CRM Integration**: Enviar dados para Salesforce, HubSpot, etc.
2. **Email Automation**: Trigger de email com recomendações
3. **Analytics**: Track conversion rates por pergunta
4. **A/B Testing**: Testar diferentes ordens de perguntas

## 🎨 Personalização

### Cores:
- Primary: Blue 600/700 (`#2563eb` / `#1d4ed8`)
- Success: Green 500 (`#22c55e`)
- Background: Gradient blue-50 to white

### Tipografia:
- Headings: Bold, 3xl-4xl
- Body: Regular, lg-xl
- Buttons: Bold, lg

### Espaçamento:
- Cards: p-8 md:p-12
- Gaps: 4-8 units
- Rounded: 2xl-3xl

## 📱 Responsividade

### Breakpoints:
- **Mobile**: 1 coluna, padding reduzido
- **Tablet**: 2 colunas para opções
- **Desktop**: Layout otimizado, 2 colunas

### Testes:
- ✅ iPhone SE (375px)
- ✅ iPad (768px)
- ✅ Desktop (1920px)

## 🚀 Performance

### Otimizações:
- Lazy loading de componentes
- Animações GPU-accelerated
- Imagens otimizadas
- Code splitting

### Métricas:
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

## 📈 Métricas de Sucesso

### KPIs:
1. **Completion Rate**: % de usuários que completam o quiz
2. **Time to Complete**: Tempo médio para completar
3. **Drop-off Points**: Onde os usuários abandonam
4. **Conversion Rate**: % que ligam ou agendam após o quiz

### Metas:
- Completion Rate: > 70%
- Time to Complete: 2-3 minutos
- Conversion Rate: > 30%

## 🔒 Privacidade

- Não coleta informações pessoais identificáveis
- Dados usados apenas para recomendações
- Conformidade com LGPD/GDPR

## 🎓 Próximas Melhorias

1. **Recomendações em Tempo Real**: Mostrar produtos sugeridos após cada resposta
2. **Galeria de Inspiração**: Imagens baseadas nas respostas
3. **Calculadora de Orçamento**: Estimativa de custo em tempo real
4. **Compartilhamento Social**: Compartilhar resultados
5. **Salvamento de Progresso**: Continuar depois via email
6. **Multi-idioma**: Português + Inglês + Espanhol

---

**Desenvolvido para SigTile** | Flooring Excellence Since [Year]

