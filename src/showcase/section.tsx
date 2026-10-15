import type { ReactNode } from 'react'

export const Section = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="flex scroll-mt-1000 flex-col gap-300">
    <h2 className="title2-emphasized text-onSurface">{title}</h2>
    {children}
  </section>
)
