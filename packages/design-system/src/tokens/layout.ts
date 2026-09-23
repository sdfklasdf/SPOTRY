export const layout = {
  touchTargetMin: 44,
  contentMaxWidth: 720,
  screenPadding: 20,
  imageRatio: { hero: 16 / 9, card: 4 / 3, square: 1 },
  zIndex: { base: 0, sticky: 10, modal: 100, toast: 200 }
} as const;
