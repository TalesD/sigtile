import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { cn } from '@/lib/utils'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
        window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background text-foreground transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </button>

      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={reactLogo} className="w-20 h-20 animate-spin" style={{ animationDuration: '3s' }} alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-4xl font-bold mb-8 tracking-tight">Vite + React + Tailwind</h1>
      
      <div className="p-8 bg-card border border-border rounded-xl shadow-lg text-center max-w-md w-full transition-colors duration-300">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className={cn(
            "px-6 py-2 rounded-lg font-semibold shadow-sm transition-colors",
            "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          count is {count}
        </button>
        <p className="mt-6 text-muted-foreground">
          Edit <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="mt-8 text-muted-foreground hover:text-primary transition-colors">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
