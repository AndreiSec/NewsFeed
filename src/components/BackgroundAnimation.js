import React, { useEffect } from 'react';
import { Animated, Easing, Dimensions } from 'react-native';
import styled from 'styled-components/native';


import backgroundImage from '../assets/background/newspapers.jpg';
import {
  INPUT_RANGE_START,
  INPUT_RANGE_END,
  OUTPUT_RANGE_START,
  OUTPUT_RANGE_END,
  ANIMATION_TO_VALUE,
  ANIMATION_DURATION,
} from '../config/Constants';

const BackgoundImage = styled.ImageBackground.attrs(props => ({
  imageStyle: {
    width: '400%',
    height: '400%',
    transform: [
      {
        translateX: props.translateIn.inX,
      },
      {
        translateY: props.translateIn.inY,
      },
      {
        rotate: '-45deg',
      },
    ],
  },
}))`
  position: absolute;
  top: -100%;
  left: 0;
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`;

const translateIn = {
  inX: -(Dimensions.get('window').width * 0.9375),
  inY: -(Dimensions.get('window').height * 0.9375),
};

function BackgroundAnimation() {
  const inicialValue = 0;
  const translateValue = new Animated.Value(inicialValue);

  useEffect(() => {
    const translate = () => {
      translateValue.setValue(inicialValue);
      Animated.timing(translateValue, {
        toValue: ANIMATION_TO_VALUE,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => translate());
    };

    translate();
  }, [translateValue]);

  const translateAnimation = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
  });

  const AnimetedImage = Animated.createAnimatedComponent(BackgoundImage);

  return (
    <AnimetedImage
      source={backgroundImage}
      resizeMode="repeat"
      style={{
        zIndex: 0,
        transform: [
          {
            translateX: translateAnimation,
          },
          {
            translateY: translateAnimation,
          },
        ],
      }}
      translateIn={translateIn}
    />
  );
}

export default BackgroundAnimation