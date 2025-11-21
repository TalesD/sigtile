# SigTile Assets Structure

Este arquivo documenta a estrutura de assets (imagens) do projeto SigTile.

## Estrutura de Diretórios

```
public/
└── assets/
    ├── hero/
    │   ├── flooring-hero-background.jpg
    │   ├── sigtile-logo.png
    │   └── sigtile-favicon.png
    │
    ├── services/
    │   ├── tile-installation.jpg
    │   ├── laminate-flooring.jpg
    │   ├── vinyl-plank-flooring.jpg
    │   ├── hardwood-flooring.jpg
    │   ├── icon-tile.webp
    │   ├── icon-laminate.webp
    │   ├── icon-vinyl.webp
    │   └── icon-hardwood.webp
    │
    ├── gallery/
    │   ├── tile-installation-kitchen-01.jpg
    │   ├── vinyl-plank-living-room-01.jpg
    │   ├── hardwood-bedroom-01.jpg
    │   ├── laminate-office-01.jpg
    │   ├── tile-bathroom-01.jpg
    │   ├── hardwood-hallway-01.jpg
    │   └── before-after/
    │       ├── kitchen-before.jpg
    │       ├── kitchen-after.jpg
    │       ├── living-room-before.jpg
    │       ├── living-room-after.jpg
    │       ├── bathroom-before.jpg
    │       ├── bathroom-after.jpg
    │       ├── bedroom-before.jpg
    │       └── bedroom-after.jpg
    │
    ├── reviews/
    │   ├── avatar-01.jpg
    │   ├── avatar-02.jpg
    │   ├── avatar-03.jpg
    │   └── google-reviews-badge.png
    │
    └── features/
        ├── licensed-insured.jpg
        ├── free-estimates.jpg
        ├── fast-installation.jpg
        └── warranty-included.jpg
```

## Como Usar

### Importar as constantes de assets:

```javascript
import { 
  heroAssetPath, 
  servicesAssetPath, 
  galleryAssetPath,  // Agora inclui before/after em cada projeto
  reviewsAssetPath, 
  featuresAssetPath
} from './assets/assetPaths';
```

### Usar em componentes:

```javascript
// Exemplo 1: Imagem única
<img src={heroAssetPath.logoMain} alt="SigTile Logo" />

// Exemplo 2: Thumbnail da galeria
<img src={galleryAssetPath.project01.thumbnail} alt="Project 1" />

// Exemplo 3: Mapear galeria com before/after
{Object.entries(galleryAssetPath).map(([key, projectData]) => (
  <div key={key}>
    <img src={projectData.thumbnail} alt={projectData.title} />
    <h3>{projectData.title}</h3>
    <p>{projectData.description}</p>
    {/* Before & After disponíveis em projectData.before e projectData.after */}
  </div>
))}

// Exemplo 4: Com TypeScript
import type { GalleryAssetKey } from './assets/assetPaths';
const projectKey: GalleryAssetKey = 'project01';
const project = galleryAssetPath[projectKey];
console.log(project.title, project.before, project.after);
```

## Recomendações de Imagens

### Hero Section
- **Tamanho recomendado**: 1920x1080px
- **Formato**: JPG ou WebP
- **Otimização**: Comprimir para web (< 500KB)

### Services
- **Tamanho recomendado**: 800x600px
- **Formato**: JPG ou WebP
- **Ícones**: 256x256px (WebP com transparência)

### Gallery
- **Tamanho recomendado**: 1200x1200px (quadrado)
- **Formato**: JPG ou WebP
- **Otimização**: Comprimir mantendo qualidade (< 300KB cada)

### Reviews
- **Avatares**: 200x200px (círculo)
- **Formato**: JPG ou PNG
- **Badge**: PNG com transparência

### Features
- **Tamanho recomendado**: 600x400px
- **Formato**: JPG ou WebP

## SEO e Performance

- Use atributo `loading="lazy"` para imagens abaixo da dobra
- Inclua `alt` descritivo em todas as imagens
- Considere usar WebP para melhor compressão
- Mantenha imagens otimizadas (< 500KB quando possível)

