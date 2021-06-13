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
    backgroundColor: colors.tomatoColor,
    paddingTop: sizes.sizeSeven,
    paddingBottom: sizes.sizeSeven,
    borderRadius: sizes.sizeTwentyFive,
    textAlign: 'center',
    fontSize: sizes.sizeSixteen,
  },
  loader: {
    backgroundColor: colors.tomatoColor,
    paddingTop: sizes.sizeTen,
    paddingBottom: sizes.sizeTen,
    borderRadius: sizes.sizeTwentyFive,
  },
});
