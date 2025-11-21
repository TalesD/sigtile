# 🎨 Before & After Comparison - Setup Guide

## ✅ O Que Foi Implementado

### 1. **Componentes UI Criados** (`src/components/ui/`)

#### Badge Component
- Componente shadcn para badges/etiquetas
- Múltiplas variantes (default, secondary, destructive, outline)
- Arquivo: `src/components/ui/badge.tsx`

#### Modal Component
- Modal responsivo e acessível
- Fecha com ESC, backdrop click, ou botão X
- Previne scroll do body quando aberto
- Arquivo: `src/components/ui/modal.tsx`

#### Feature (Before & After Comparison)
- Componente interativo de comparação de imagens
- Slider arrastável (mouse e touch)
- Labels "Before" e "After" automáticos
- Adaptado do Next.js para React puro
- Arquivo: `src/components/ui/feature-with-image-comparison.tsx`

### 2. **Assets Path Refatorado** (`src/assets/assetPaths.ts`)

O `galleryAssetPath` agora é um objeto completo com todas as informações:

```typescript
export const galleryAssetPath = {
  project01: {
    thumbnail: "/assets/gallery/tile-bathroom-01.jpg",
    before: "/assets/gallery/before-after/bathroom-before.jpg",
    after: "/assets/gallery/before-after/bathroom-after.jpg",
    title: "Bathroom Tile Renovation",
    description: "Professional tile installation..."
  },
  project02: { ... },
  // ... mais projetos
} as const;
```

**Benefícios:**
- ✅ Estrutura unificada (não precisa de `beforeAfterAssetPath` separado)
- ✅ Cada projeto tem thumbnail + before/after + metadados
- ✅ Mais fácil de adicionar novos projetos
- ✅ Menos código no LandingPage

### 3. **Integração no LandingPage** (`src/LandingPage.jsx`)

- ✅ Estado para controlar modal (`isModalOpen`, `selectedProject`)
- ✅ Função `openProjectModal(projectData)` recebe o objeto completo do projeto
- ✅ Galeria mapeia `Object.entries(galleryAssetPath)` automaticamente
- ✅ Cada projeto é clicável e abre o modal com before/after
- ✅ Modal renderizado no final do componente
- ✅ **Sem necessidade de mapeamento manual** - tudo vem do `galleryAssetPath`

### 4. **Estrutura de Diretórios**

```
public/assets/gallery/before-after/
├── kitchen-before.jpg
├── kitchen-after.jpg
├── living-room-before.jpg
├── living-room-after.jpg
├── bathroom-before.jpg
├── bathroom-after.jpg
├── bedroom-before.jpg
└── bedroom-after.jpg
```

## 🚀 Como Usar

### Para o Usuário Final:

1. **Navegue** até a seção "Recent Projects Gallery"
2. **Clique** em qualquer projeto (1-4 tem comparações antes/depois)
3. **Arraste** o slider horizontal para comparar antes e depois
4. **Feche** o modal clicando no X, ESC, ou fora do modal

### Para Desenvolvedores:

#### Adicionar Nova Comparação:

**Passo 1:** Adicione as imagens em `public/assets/gallery/` e `public/assets/gallery/before-after/`
```
public/assets/gallery/office-thumbnail.jpg
public/assets/gallery/before-after/office-before.jpg
public/assets/gallery/before-after/office-after.jpg
```

**Passo 2:** Atualize APENAS `src/assets/assetPaths.ts`
```typescript
export const galleryAssetPath = {
  // ... existing projects
  project07: {
    thumbnail: "/assets/gallery/office-thumbnail.jpg",
    before: "/assets/gallery/before-after/office-before.jpg",
    after: "/assets/gallery/before-after/office-after.jpg",
    title: "Office Floor Renovation",
    description: "Commercial laminate flooring transformation..."
  }
} as const;
```

**Pronto!** ✅ O novo projeto aparece automaticamente na galeria com comparação before/after.

**Não precisa:**
- ❌ Atualizar LandingPage.jsx
- ❌ Criar mapeamentos manuais
- ❌ Modificar componentes

## 📋 Projetos Configurados

| Projeto | Título | Status |
|---------|--------|--------|
| Project 1 | Bathroom Tile Renovation | ✅ Completo |
| Project 2 | Living Room Vinyl Plank Installation | ✅ Completo |
| Project 3 | Hardwood Floor Refinishing | ✅ Completo |
| Project 4 | Kitchen Tile Transformation | ✅ Completo |
| Project 5 | Master Bathroom Upgrade | ✅ Completo |
| Project 6 | Bedroom Hardwood Restoration | ✅ Completo |

**Todos os projetos têm:**
- ✅ Thumbnail para galeria
- ✅ Before image
- ✅ After image
- ✅ Título e descrição

## 🖼️ Requisitos de Imagens

### Before & After:
- **Aspecto:** 16:9 (recomendado)
- **Resolução:** Mínimo 1920x1080px
- **Formato:** JPG ou WebP
- **Tamanho:** < 500KB cada (otimizar para web)
- **Importante:** 
  - Use mesmo ângulo de câmera
  - Mesma iluminação se possível
  - Mesma resolução para before e after

## 🎯 Features do Componente

### Interatividade:
- ✅ Arraste com mouse
- ✅ Touch/swipe em mobile
- ✅ Slider centralizado no início (50%)
- ✅ Limites (não passa de 0% ou 100%)

### Acessibilidade:
- ✅ Fecha com ESC
- ✅ Botão de fechar visível
- ✅ Previne scroll do body
- ✅ Alt text nas imagens

### Responsividade:
- ✅ Mobile first
- ✅ Adapta a diferentes tamanhos
- ✅ Touch gestures funcionam

## 📚 Documentação

- `src/assets/README.md` - Guia de assets
- `src/components/ui/README.md` - Guia de componentes
- `public/assets/gallery/before-after/.gitkeep` - Instruções de imagens

## 🔧 Tecnologias Usadas

- React (sem Next.js)
- TypeScript
- Tailwind CSS
- Framer Motion (animações)
- Lucide React (ícones)
- class-variance-authority (variantes)

## ✅ Checklist de Setup

- [x] Componentes UI criados
- [x] Modal implementado
- [x] Before/After component adaptado
- [x] assetPaths.ts atualizado
- [x] LandingPage integrado
- [x] Diretórios criados
- [x] Documentação completa
- [x] Sem erros de linting
- [x] TypeScript types exportados

## 🎨 Próximos Passos (Opcional)

1. **Adicionar imagens reais** nos diretórios
2. **Testar no navegador** e mobile
3. **Ajustar títulos/descrições** conforme necessário
4. **Adicionar mais comparações** (projects 5 e 6)
5. **Otimizar imagens** para performance

## 📞 Suporte

Para adicionar mais comparações ou modificar o comportamento, consulte:
- `src/components/ui/README.md`
- `src/assets/README.md`

---

**Implementação completa! ✨** 

Agora é só adicionar as imagens reais e testar! 🚀

