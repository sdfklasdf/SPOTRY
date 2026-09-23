export function redirectSystemPath({ path }: { path: string; initial: boolean }): string {
  try {
    if (path === 'spotry://compare' || path === 'spotry://compare/') {
      return '/record/compare';
    }
    return path;
  } catch {
    return '/';
  }
}
