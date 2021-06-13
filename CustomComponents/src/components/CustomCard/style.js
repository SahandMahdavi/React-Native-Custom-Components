/**
 * Created By: Sahand Mahdavi.
 * Email: shndmahdavi@gmail.com
 */
import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.silverColor,
    padding: sizes.sizeSixteen,
    borderRadius: sizes.sizeEight,
    elevation: sizes.sizeFive,
    shadowColor: colors.primaryColor,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
  },
});
