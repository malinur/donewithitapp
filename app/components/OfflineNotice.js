import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useNetInfo} from '@react-native-community/netinfo';

import colors from '../config/colors';
import AppText from './AppText';

export default function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.type != 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    //top: getStatusBarHeight(),
    width: '100%',
    zIndex: 1,
    elevation: Platform.OS === 'android' ? 1 : 0,
  },
  text: {
    color: colors.white,
  },
});
