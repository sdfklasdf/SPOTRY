const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  const fromDesignSystem =
    context.originModulePath &&
    context.originModulePath.includes('/packages/design-system/src/');

  if (
    fromDesignSystem &&
    moduleName.startsWith('.') &&
    moduleName.endsWith('.js')
  ) {
    return context.resolveRequest(
      context,
      moduleName.slice(0, -3),
      platform
    );
  }

  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
