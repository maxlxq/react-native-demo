module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'], //表示哪个目录开始设置绝对路径
        alias: {
          //别名的配置
          '@/COMPONENTS': './app/components',
          '@/CONSTANTS': './app/constants',
          '@/CONFIG': './app/config',
          '@/NAVIGATION': './app/navigation',
          '@/SCREENS': './app/screens',
          '@/STYLES': './app/styles',
          '@/THEME': './app/theme',
          '@/ASSETS': './app/assets',
          '@/ACTION': './app/redux/action',
          '@/REDUCER': './app/redux/reducer',
          '@/SAGA': './app/redux/saga',
          '@/STORE': './app/redux/store',
        },
      },
    ],
  ],
};
