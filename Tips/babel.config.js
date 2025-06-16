// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // Expo 프로젝트의 기본 Babel 프리셋
      // NativeWind와 통합하기 위해 jsxImportSource 옵션을 추가합니다.
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      // NativeWind의 Babel 프리셋을 추가합니다.
      // 이 프리셋이 Tailwind CSS 클래스를 React Native 스타일로 변환하는 핵심 역할을 합니다.
      "nativewind/babel",
    ],
  };
};