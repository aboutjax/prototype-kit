export type ColorGroup = { name: string; tokens: string[] }

export const colorGroups: ColorGroup[] = [
  {
    name: 'Primary',
    tokens: [
      'primary',
      'onPrimary',
      'primaryContainer',
      'onPrimaryContainer',
      'primaryBright',
      'primaryDim',
      'primarySurface',
      'inversePrimary',
    ],
  },
  {
    name: 'Surface',
    tokens: [
      'background',
      'surface',
      'surfaceDim',
      'surfaceBright',
      'surfaceContainerLowest',
      'surfaceContainerLow',
      'surfaceContainer',
      'surfaceContainerHigh',
      'surfaceContainerHighest',
      'inverseSurface',
      'inverseOnSurface',
    ],
  },
  {
    name: 'Content & outline',
    tokens: ['onSurface', 'onSurfaceVariant', 'onSurfaceDim', 'outline', 'outlineVariant'],
  },
  ...['error', 'warn', 'success', 'info', 'super'].map((role) => ({
    name: role[0].toUpperCase() + role.slice(1),
    tokens: [
      role,
      `on${role[0].toUpperCase()}${role.slice(1)}`,
      `${role}Container`,
      `on${role[0].toUpperCase()}${role.slice(1)}Container`,
      `${role}Bright`,
    ],
  })),
  {
    name: 'Prime (theme-independent)',
    tokens: ['prime', 'primeDim', 'onPrime', 'primeContainer', 'onPrimeContainer'],
  },
]

/* Full class names are listed so Tailwind's source scanner generates them. */
export const typeRamp = [
  { className: 'display1', spec: 'Manrope 45/52, -0.5' },
  { className: 'display1-emphasized', spec: 'Manrope 45/52, -0.5, bold' },
  { className: 'display2', spec: 'Manrope 36/42, -0.5' },
  { className: 'display2-emphasized', spec: 'Manrope 36/42, -0.5, bold' },
  { className: 'title1', spec: 'Inter 28/34, -0.25' },
  { className: 'title1-emphasized', spec: 'Inter 28/34, -0.25, semibold' },
  { className: 'title2', spec: 'Inter 22/28, -0.25' },
  { className: 'title2-emphasized', spec: 'Inter 22/28, -0.25, semibold' },
  { className: 'title3', spec: 'Inter 20/28' },
  { className: 'title3-emphasized', spec: 'Inter 20/28, semibold' },
  { className: 'headline', spec: 'Inter 16/22, semibold' },
  { className: 'body1', spec: 'Inter 16/22, -0.25' },
  { className: 'body1-emphasized', spec: 'Inter 16/22, -0.25, medium' },
  { className: 'body2', spec: 'Inter 14/20, -0.25' },
  { className: 'body2-emphasized', spec: 'Inter 14/20, -0.25, medium' },
  { className: 'caption1', spec: 'Inter 12/16' },
  { className: 'caption1-emphasized', spec: 'Inter 12/16, semibold' },
  { className: 'caption1-uppercase', spec: 'Inter 12/16, +0.5, semibold, uppercase' },
  { className: 'caption2', spec: 'Inter 11/13' },
  { className: 'caption2-emphasized', spec: 'Inter 11/13, medium' },
  { className: 'caption2-uppercase', spec: 'Inter 11/13, +0.5, medium, uppercase' },
]

export const spacingScale = [25, 50, 75, 100, 125, 150, 200, 250, 300, 350, 400, 500, 600, 800, 1000]

export const radiusScale = [100, 200, 300, 400, 500, 600, 700]

export const shadowScale = ['elevation1', 'elevation2', 'elevation3', 'elevation4', 'buttonActive']
