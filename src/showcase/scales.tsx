import { Section } from './section'
import { radiusScale, shadowScale, spacingScale } from './tokens'

export const Scales = () => (
  <Section id="scales" title="Spacing, radius & elevation">
    <div className="grid gap-300 md:grid-cols-3">
      <div className="flex flex-col gap-100 rounded-400 bg-surfaceContainer p-300 shadow-elevation1">
        <h3 className="caption1-uppercase text-onSurfaceVariant">Spacing (p-100, gap-200…)</h3>
        {spacingScale.map((step) => (
          <div key={step} className="flex items-center gap-150">
            <code className="w-500 caption1 text-onSurfaceVariant">{step}</code>
            <div className="h-150 rounded-100 bg-primary" style={{ width: `var(--spacing-${step})` }} />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-200 rounded-400 bg-surfaceContainer p-300 shadow-elevation1">
        <h3 className="caption1-uppercase text-onSurfaceVariant">Radius (rounded-300…)</h3>
        <div className="grid grid-cols-3 gap-200">
          {radiusScale.map((step) => (
            <div key={step} className="flex flex-col items-center gap-75">
              <div
                className="size-600 bg-primaryContainer ring-1 ring-primary"
                style={{ borderRadius: `var(--radius-${step})` }}
              />
              <code className="caption1 text-onSurfaceVariant">{step}</code>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-200 rounded-400 bg-surfaceContainerLow p-300">
        <h3 className="caption1-uppercase text-onSurfaceVariant">Shadow (shadow-elevation2…)</h3>
        <div className="grid grid-cols-2 gap-300">
          {shadowScale.map((name) => (
            <div
              key={name}
              className="flex h-800 items-center justify-center rounded-300 bg-surfaceContainer"
              style={{ boxShadow: `var(--shadow-${name})` }}
            >
              <code className="caption1 text-onSurfaceVariant">{name}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
)
