/**
 * Created By: Sahand Mahdavi.
 * Email: shndmahdavi@gmail.com
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import strings from '../constants/strings';
import sizes from '../constants/sizes';
import colors from '../constants/colors';

// -------- Components ---------
import {CustomButton} from '../components/CustomButton/index';
import {CustomCard} from '../components/CustomCard/index';
import {CustomTextView} from '../components/CustomTextView/index';
import enums from '../constants/enums';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
    // setIsLoading(false);
  }, [isLoading]);

  const buttonPress = () => {
    setIsLoading(true);
    console.log('Custom Button ===>', 'Pressed');
  };

  return (
    <SafeAreaView>
      <View>
        <CustomButton
          action={() => buttonPress()}
          title={strings.buttonTitle}
          marginTop={sizes.sizeSixteen}
          marginRight={sizes.sizeSixteen}
          marginBottom={sizes.sizeEight}
          marginLeft={sizes.sizeSixteen}
          fontSize={sizes.sizeTwelve}
          paddingTop={sizes.sizeTwelve}
          paddingBottom={sizes.sizeTwelve}
          loader={isLoading}
        />
      </View>

      <View>
        <CustomCard
          marginTop={sizes.sizeSixteen}
          marginRight={sizes.sizeSixteen}
          marginLeft={sizes.sizeSixteen}
          backgroundColor={colors.silverColor}>
          <CustomTextView
            text={strings.textOne}
            textColor={colors.primaryColor}
            textSize={sizes.sizeSixteen}
            textAlign={enums.CENTER}
            ellipsizeMode={'tail'}
            marginTop={sizes.sizeFive}
            numberOfLines={1}
          />

          <CustomTextView
            text={strings.textTwo}
            textColor={colors.tomatoColor}
            textSize={sizes.sizeSixteen}
            textAlign={enums.RIGHT}
            ellipsizeMode={'tail'}
            marginTop={sizes.sizeFive}
            numberOfLines={1}
          />
        </CustomCard>
      </View>
    </SafeAreaView>
  );
};

export default App;
