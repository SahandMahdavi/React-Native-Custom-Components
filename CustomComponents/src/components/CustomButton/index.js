/**
 * Created By: Sahand Mahdavi.
 * Email: shndmahdavi@gmail.com
 */
import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../constants/colors';
import {style} from './style';

export function CustomButton({
  action,
  title,
  marginRight,
  marginLeft,
  marginTop,
  fontSize,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  loader,
}) {
  return (
    <TouchableOpacity disabled={loader} onPress={action}>
      {loader ? (
        <ActivityIndicator
          style={[
            style.loader,
            {
              marginRight: marginRight,
              marginLeft: marginLeft,
              marginTop: marginTop,
              fontSize: fontSize,
              paddingTop: paddingTop,
              paddingRight: paddingRight,
              paddingBottom: paddingBottom,
              paddingLeft: paddingLeft,
            },
          ]}
          animating={true}
          size={'small'}
          color={colors.primaryColor}
        />
      ) : (
        <Text
          style={[
            style.container,
            {
              marginRight: marginRight,
              marginLeft: marginLeft,
              marginTop: marginTop,
              fontSize: fontSize,
              paddingTop: paddingTop,
              paddingRight: paddingRight,
              paddingBottom: paddingBottom,
              paddingLeft: paddingLeft,
            },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
