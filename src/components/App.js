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
          <Text>First Child</Text>
          <Text>Second Child</Text>
          <Text>Third Child</Text>
        </CustomCard>
      </View>
    </SafeAreaView>
  );
};

export default App;
