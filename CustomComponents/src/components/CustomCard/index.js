/**
 * Created By: Sahand Mahdavi.
 * Email: shndmahdavi@gmail.com
 */
import React from 'react';
import {View} from 'react-native';
import {style} from './style';

export function CustomCard({
  marginRight,
  marginTop,
  marginLeft,
  marginBottom,
  backgroundColor,
  children,
  height,
}) {
  return (
    <View
      style={[
        style.container,
        {
          height: height,
          marginRight: marginRight,
          marginLeft: marginLeft,
          marginTop: marginTop,
          marginBottom: marginBottom,
          backgroundColor: backgroundColor,
        },
      ]}>
      {children}
    </View>
  );
}
