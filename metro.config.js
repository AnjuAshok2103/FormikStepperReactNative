const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

const configMetro = mergeConfig(defaultConfig, config);

module.exports = wrapWithReanimatedMetroConfig(configMetro);