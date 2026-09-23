import { colors, radius, spacing, typography } from '../tokens/index.js';

export function spotryCssVariables(): Readonly<Record<string, string>> {
  return {
    '--spotry-action-500': colors.action[500],
    '--spotry-action-600': colors.action[600],
    '--spotry-action-100': colors.action[100],
    '--spotry-ink-950': colors.ink[950],
    '--spotry-ink-800': colors.ink[800],
    '--spotry-ink-600': colors.ink[600],
    '--spotry-line-200': colors.line[200],
    '--spotry-canvas': colors.canvas,
    '--spotry-soft': colors.soft,
    '--spotry-radius-md': `${radius.md}px`,
    '--spotry-radius-lg': `${radius.lg}px`,
    '--spotry-space-2': `${spacing[2]}px`,
    '--spotry-space-4': `${spacing[4]}px`,
    '--spotry-font-sans': typography.family.sans,
  };
}

export function spotryCssVariableBlock(selector = ':root'): string {
  const variables = spotryCssVariables();
  const body = Object.entries(variables).map(([key, value]) => `  ${key}: ${value};`).join('\n');
  return `${selector} {\n${body}\n}`;
}
