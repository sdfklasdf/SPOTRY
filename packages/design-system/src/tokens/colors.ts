export const colors = {
  action: { 100: '#E9FFE2', 500: '#5AF03A', 600: '#49D82D' },
  ink: { 950: '#0B111B', 800: '#202734', 600: '#5D6673', 400: '#939AA4' },
  line: { 200: '#E8EBEE' },
  canvas: '#FFFFFF',
  soft: '#F6F8F6',
  semantic: {
    successBg: '#ECF9EE', successText: '#176B2C',
    warningBg: '#FFF7DF', warningText: '#765A00',
    dangerBg: '#FFF0F0', dangerText: '#9D2020',
    infoBg: '#EEF5FF', infoText: '#245B9E'
  }
} as const;

export type ColorToken = typeof colors;
