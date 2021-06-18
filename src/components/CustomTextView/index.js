/**
 * Created By: Sahand Mahdavi.
 * Email: shndmahdavi@gmail.com
 */
import React from 'react';
import {Text} from 'react-native';

export function CustomTextView({
  text,
  textFontFamily,
  textColor,
  textSize,
  textAlign,
  marginTop,
  marginRight,
  marginLeft,
  ellipsizeMode,
  numberOfLines,
}) {
  return (
    <Text
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      style={{
        textAlign: textAlign,
        color: textColor,
        fontFamily: textFontFamily,
        fontSize: textSize,
        marginTop: marginTop,
        marginRight: marginRight,
        marginLeft: marginLeft,
      }}>
      {text}
    </Text>
  );
}
