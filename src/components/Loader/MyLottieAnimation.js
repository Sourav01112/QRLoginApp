import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const MyLottieAnimation = () => {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require('./animation.json')} 
        autoPlay
        loop
      />
    </View>
  );
};

export default MyLottieAnimation;
