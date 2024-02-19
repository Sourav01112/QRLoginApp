import React from 'react';
import { View, Text, Platform, TouchableOpacity, StyleSheet } from 'react-native';

function LandingButton({title,onPress}) {

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#de7bd7',
    paddingVertical: 16,
    textAlign: 'center',
    borderRadius: 18,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default LandingButton;
