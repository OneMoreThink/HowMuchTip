// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

// Expo의 기본 Metro 설정을 가져옵니다.
const config = getDefaultConfig(__dirname); // __dirname은 현재 파일(metro.config.js)이 있는 디렉토리
                                          // 즉, 프로젝트 루트 디렉토리를 의미합니다.

// NativeWind 헬퍼 함수로 Metro 설정을 감싸고, global.css 파일의 경로를 지정합니다.
module.exports = withNativeWind(config, { input: './global.css' });