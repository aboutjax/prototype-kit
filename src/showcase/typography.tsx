import { Section } from './section'
import { typeRamp } from './tokens'

export const Typography = () => (
  <Section id="typography" title="Typography">
    <div className="flex flex-col divide-y divide-outlineVariant rounded-400 bg-surfaceContainer px-300 shadow-elevation1">
      {typeRamp.map(({ className, spec }) => (
        <div key={className} className="flex flex-col gap-50 py-200 md:flex-row md:items-baseline md:gap-400">
          <div className="flex shrink-0 flex-col md:w-60">
            <code className="caption1-emphasized text-primary">{className}</code>
            <span className="caption2 text-onSurfaceVariant">{spec}</span>
          </div>
          <p className={`${className} truncate text-onSurface`}>The quick brown fox jumps over the lazy dog</p>
        </div>
      ))}
    </div>
  </Section>
)
