# FAQ Section Component

## Overview
An interactive, animated FAQ (Frequently Asked Questions) component with collapsible items and optional contact section.

## Features
- ✅ Smooth expand/collapse animations using Framer Motion
- ✅ Gradient backgrounds on active items
- ✅ Animated chevron icon rotation
- ✅ Optional contact section with call-to-action
- ✅ Fully responsive design
- ✅ Accessible with proper ARIA attributes
- ✅ Data-driven from external configuration

## Usage

### Basic Implementation

```jsx
import { FaqSection } from './components/ui/faq-section';
import { faqData } from './assets/assetPaths';

function App() {
  return (
    <FaqSection
      title="Frequently Asked Questions"
      description="Everything you need to know"
      items={faqData}
      contactInfo={{
        title: "Still have questions?",
        description: "We're here to help",
        buttonText: "Contact Us",
        onContact: () => console.log("Contact clicked")
      }}
    />
  );
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Main heading for the FAQ section |
| `description` | `string` | No | Subheading text below the title |
| `items` | `Array<{question: string, answer: string}>` | Yes | Array of FAQ items |
| `contactInfo` | `object` | No | Optional contact section configuration |
| `className` | `string` | No | Additional CSS classes |

### Contact Info Object

```typescript
{
  title: string;          // Contact section heading
  description: string;    // Contact section description
  buttonText: string;     // CTA button text
  onContact?: () => void; // Click handler for CTA button
}
```

## Data Structure

FAQ data is stored in `src/assets/assetPaths.ts`:

```typescript
export const faqData = [
  {
    question: "Your question here?",
    answer: "Your detailed answer here."
  },
  // ... more items
];
```

## Styling

The component uses:
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons (ChevronDown, Mail)
- **Shadcn Button** component

### Color Customization

Colors are defined in `tailwind.config.js` and `src/index.css`:
- Primary: Blue (600/700)
- Background: White/Gray-50
- Text: Gray-900/700/600

## Animation Details

- **Initial Load**: Items fade in with stagger effect (50ms delay between items)
- **Expand/Collapse**: Smooth height and opacity transitions (300ms)
- **Chevron**: Rotates 180° and scales 1.1x when active
- **Background**: Gradient appears on active items

## Accessibility

- Semantic HTML (`<section>`, `<h2>`, `<h3>`)
- Proper button roles and ARIA attributes
- Keyboard navigation support
- Focus states on interactive elements

## Dependencies

```json
{
  "framer-motion": "^11.x",
  "lucide-react": "^0.x",
  "@radix-ui/react-slot": "^1.x",
  "class-variance-authority": "^0.x"
}
```

## Integration Checklist

- [x] Install required NPM packages
- [x] Create `button.tsx` component
- [x] Create `faq-section.jsx` component
- [x] Add FAQ data to `assetPaths.ts`
- [x] Import and use in `LandingPage.jsx`
- [x] Configure Tailwind container settings
- [x] Verify CSS variables in `index.css`

## Example FAQ Data

```javascript
export const faqData = [
  {
    question: "How long does installation take?",
    answer: "Most projects take 1-3 days depending on size and complexity."
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes, all installations include a comprehensive workmanship warranty."
  }
];
```

## Notes

- Component is converted from TypeScript to JSX for compatibility
- Uses Shadcn UI design patterns
- Fully responsive with mobile-first approach
- Contact section is optional - omit `contactInfo` prop to hide it

