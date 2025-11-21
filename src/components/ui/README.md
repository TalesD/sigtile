# UI Components - SigTile

Este diretório contém os componentes UI reutilizáveis do projeto.

## Componentes Disponíveis

### 1. Badge
Componente para exibir badges/etiquetas com diferentes variantes.

**Uso:**
```tsx
import { Badge } from '@/components/ui/badge';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

### 2. Modal
Componente de modal/overlay responsivo e acessível.

**Uso:**
```tsx
import { Modal } from '@/components/ui/modal';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>Your content here...</p>
      </Modal>
    </>
  );
}
```

**Features:**
- Fecha com ESC
- Fecha ao clicar no backdrop
- Previne scroll do body quando aberto
- Botão X para fechar
- Responsivo

### 3. Feature (Before & After Comparison)
Componente interativo de comparação antes/depois com slider.

**Uso:**
```tsx
import { Feature } from '@/components/ui/feature-with-image-comparison';

<Feature
  beforeImage="/path/to/before.jpg"
  afterImage="/path/to/after.jpg"
  title="Amazing Transformation"
  description="See the stunning difference..."
  badgeText="Before & After"
/>
```

**Props:**
- `beforeImage` (required): URL da imagem "antes"
- `afterImage` (required): URL da imagem "depois"
- `title` (optional): Título da seção
- `description` (optional): Descrição
- `badgeText` (optional): Texto do badge

**Features:**
- Arraste o slider para comparar
- Funciona com mouse e touch
- Responsivo
- Labels "Before" e "After" automáticos

## Integração no LandingPage

### Como funciona a galeria de projetos:

1. **Clique em um projeto** na seção "Recent Projects Gallery"
2. **Modal abre** com comparação antes/depois
3. **Arraste o slider** para ver a transformação

### Estrutura de projetos:

Cada projeto no `galleryAssetPath` agora contém:
```javascript
project01: {
  thumbnail: "/assets/gallery/tile-bathroom-01.jpg",
  before: "/assets/gallery/before-after/bathroom-before.jpg",
  after: "/assets/gallery/before-after/bathroom-after.jpg",
  title: "Bathroom Tile Renovation",
  description: "Professional tile installation..."
}
```

### Adicionar novas comparações:

1. **Adicione as imagens** em `public/assets/gallery/before-after/`:
   - `new-room-before.jpg`
   - `new-room-after.jpg`

2. **Atualize `assetPaths.ts`**:
```typescript
export const galleryAssetPath = {
  // ... existing projects
  project07: {
    thumbnail: "/assets/gallery/new-room-thumbnail.jpg",
    before: "/assets/gallery/before-after/new-room-before.jpg",
    after: "/assets/gallery/before-after/new-room-after.jpg",
    title: "New Room Transformation",
    description: "Description of the transformation..."
  }
} as const;
```

**Pronto!** O novo projeto aparecerá automaticamente na galeria com comparação antes/depois.

## Dependências

Os componentes requerem as seguintes dependências (já instaladas):

- `lucide-react` - Ícones
- `class-variance-authority` - Variantes de estilos
- `framer-motion` - Animações (para o LandingPage)
- `tailwindcss` - Estilos

## Estrutura de Arquivos

```
src/
├── components/
│   └── ui/
│       ├── badge.tsx
│       ├── modal.tsx
│       ├── feature-with-image-comparison.tsx
│       └── README.md (este arquivo)
├── assets/
│   └── assetPaths.ts
└── LandingPage.jsx
```

## Notas Importantes

- Todas as imagens devem estar em `public/assets/`
- Use aspecto 16:9 para imagens de comparação
- Mantenha pares before/after com mesma resolução
- Otimize imagens para web (< 500KB)

