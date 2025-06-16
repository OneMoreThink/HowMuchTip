/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // app 디렉토리 내의 모든 컴포넌트
    "./components/**/*.{js,jsx,ts,tsx}", // components 디렉토리 내의 모든 컴포넌트
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};