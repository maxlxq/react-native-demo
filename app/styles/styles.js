import { StyleSheet } from 'react-native'

export const getStyles = colors => (StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontSize: 16,
    color: colors.fontColor,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'PingFangSC-Regular',
  },
  title: {
    fontSize: 16,
    color: colors.titleColor,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'PingFangSC-Medium',
  },
  btnText: {
    fontSize: 14,
    color: colors.btxTextColor,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'PingFangSC-Regular',
  },
  btnBox: {
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: colors.btnColor,
    margin: 8,
  },
}))
