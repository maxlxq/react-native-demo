import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: colors.btnColor,
    margin: 8,
  },
  textInputBase: {
    width: width - 32,
    height: 200,
    padding: 12,
    borderRadius: 6,
    backgroundColor: colors.inputBgColor,
    margin: 16,
    fontSize: 16,
    color: colors.fontColor,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'PingFangSC-Regular',
  },
  badge: {
    backgroundColor: colors.badgeBgColor,
    color: colors.badgeColor,
  },
}))
