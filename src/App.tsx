import { MoonIcon, SunIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/lib/theme'
import { ComponentsGallery } from '@/showcase/components-gallery'
import { Palette } from '@/showcase/palette'
import { Scales } from '@/showcase/scales'
import { Typography } from '@/showcase/typography'

const nav = [
  { href: '#components', label: 'Components' },
  { href: '#palette', label: 'Palette' },
  { href: '#typography', label: 'Typography' },
  { href: '#scales', label: 'Scales' },
]

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-onSurface">
      <header className="sticky top-0 z-40 border-b border-outlineVariant bg-surface/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-300 px-300 py-150">
          <span className="headline">Prototype Kit</span>
          <nav className="hidden items-center gap-300 sm:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="body2 text-onSurfaceVariant hover:text-onSurface">
                {item.label}
              </a>
            ))}
          </nav>
          <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-1000 px-300 py-600">
        <div className="flex flex-col gap-100">
          <h1 className="display2-emphasized">Wayfinder × shadcn</h1>
          <p className="body1 text-onSurfaceVariant">
            Nav design tokens on shadcn (Base UI). Replace this page with your prototype.
          </p>
        </div>
        <ComponentsGallery />
        <Palette />
        <Typography />
        <Scales />
      </main>
    </div>
  )
}

export default App
