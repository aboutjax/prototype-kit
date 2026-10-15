import { Section } from './section'
import { colorGroups } from './tokens'

/* Swatches use inline CSS vars because the token list is data-driven; in app code use classes like bg-primaryContainer. */
const Swatch = ({ token }: { token: string }) => (
  <div className="flex flex-col gap-75">
    <div
      className="h-600 rounded-300 ring-1 ring-outlineVariant ring-inset"
      style={{ backgroundColor: `var(--color-${token})` }}
    />
    <span className="caption1-emphasized text-onSurface">{token}</span>
  </div>
)

export const Palette = () => (
  <Section id="palette" title="Palette">
    <p className="body2 text-onSurfaceVariant">
      Use semantic utilities, e.g. <code>bg-primaryContainer text-onPrimaryContainer</code>. Values swap automatically
      under <code>.dark</code>.
    </p>
    {colorGroups.map((group) => (
      <div key={group.name} className="flex flex-col gap-150">
        <h3 className="caption1-uppercase text-onSurfaceVariant">{group.name}</h3>
        <div className="grid grid-cols-2 gap-200 sm:grid-cols-4 md:grid-cols-6">
          {group.tokens.map((token) => (
            <Swatch key={token} token={token} />
          ))}
        </div>
      </div>
    ))}
  </Section>
)
