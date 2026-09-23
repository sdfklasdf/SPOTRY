export type SpotryTab = 'home' | 'explore' | 'schedule' | 'record' | 'my';

export type SpotryRoute =
  | { name: 'home' }
  | { name: 'explore' }
  | { name: 'experience'; experienceId: string }
  | { name: 'session'; sessionId: string }
  | { name: 'booking'; bookingId: string }
  | { name: 'record' }
  | { name: 'record_compare' }
  | { name: 'mystery'; mysteryId: string }
  | { name: 'provider'; providerId: string }
  | { name: 'commit'; offerId: string };

export function routeToDeepLink(route: SpotryRoute): string {
  switch (route.name) {
    case 'home': return 'spotry://home';
    case 'explore': return 'spotry://explore';
    case 'experience': return `spotry://experience/${route.experienceId}`;
    case 'session': return `spotry://session/${route.sessionId}`;
    case 'booking': return `spotry://booking/${route.bookingId}`;
    case 'record': return 'spotry://record';
    case 'record_compare': return 'spotry://record/compare';
    case 'mystery': return `spotry://mystery/${route.mysteryId}`;
    case 'provider': return `spotry://provider/${route.providerId}`;
    case 'commit': return `spotry://commit/${route.offerId}`;
  }
}

export function normalizeLegacyDeepLink(url: string): string {
  if (url === 'spotry://compare' || url === 'spotry://compare/') return 'spotry://record/compare';
  return url;
}

export function tabForRoute(route: SpotryRoute): SpotryTab {
  switch (route.name) {
    case 'home': return 'home';
    case 'explore':
    case 'experience':
    case 'session':
    case 'mystery':
    case 'provider': return 'explore';
    case 'booking': return 'schedule';
    case 'record':
    case 'record_compare':
    case 'commit': return 'record';
  }
}
