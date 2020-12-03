/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-03 20:20
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import {APP_THEME} from '@CONSTANTS/App';
import {ThemeContext} from '@THEME';
import React, {useCallback, useContext} from 'react';
import {Pressable, Text, View} from 'react-native';

const Setting = () => {
  const {styles = {}, themeName, changeTheme} = useContext(ThemeContext) || {};
  const onChangeTheme = useCallback(() => {
    if (APP_THEME.Light === themeName) {
      changeTheme(APP_THEME.Dark);
    } else {
      changeTheme(APP_THEME.Light);
    }
  }, [themeName, changeTheme]);

  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Setting</Text>
      <Pressable onPress={onChangeTheme} style={styles.btnBox}>
        <Text style={styles.btnText}>改变主题</Text>
      </Pressable>
    </View>
  );
};

export default Setting;
