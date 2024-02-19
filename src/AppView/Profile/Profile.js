import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useDispatch, useSelector } from 'react-redux';
import { _removeUserData } from '../../navigation/storage/Storage';
import { useNavigation } from '@react-navigation/native';
import { setUserData } from '../../Store/Actions/AuthAction';


function Profile(props) {
  const [isScanning, setIsScanning] = useState(false);
  const reduxUser = useSelector(state => state.AuthReducer)
  const userID = reduxUser?.doc?._id;
  const navigation = useNavigation();
  
  const dispatch = useDispatch()

  const startScanning = () => {
    setIsScanning(true);
  };

  const stopScanning = () => {
    setIsScanning(false);
  };

  const handleOnPress = () => {
    Alert.alert('Logging Off', 'Are you sure want to log out', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK', onPress: () => out() },
    ]);

    function out() {
      _removeUserData()
      navigation.navigate('Login');
      dispatch(setUserData(null));
    }
  }

  const onSuccess = async (e) => {
    // Handle the data read from the QR code
    console.log('QR Code Data:', e.data);
    const payload = { uniqueIdentifier: e.data, userID: userID };

    try {
      const apiUrl = 'http://192.168.0.115:3001/api/session/verify';

      // Make a GET request using Axios
      const response = await axios.post(apiUrl, payload);

      // const result = response.data.data
    } catch (error) {
      console.log("errrrrr", error);
    }

    // You can perform any additional actions with the QR code data here
    stopScanning(); // Stop scanning after a successful read
  };

  return (
    <View style={styles.container}>
      {isScanning ? (
        <View style={styles.qrContainer}>
          <QRCodeScanner
            onRead={onSuccess}
            flashMode='off'
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable} onPress={stopScanning}>
                <Text style={styles.buttonText}>Stop Scanning</Text>
              </TouchableOpacity>
            }
          />
        </View>
      ) : (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.scanButton} onPress={startScanning}>
            <Text style={styles.buttonText}>Scan QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleOnPress}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrContainer: {
    flex: 1,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButton: {
    padding: 16,
    backgroundColor: 'green', // Adjust the color as needed
    marginRight: 10,
  },
  logoutButton: {
    padding: 16,
    backgroundColor: 'red', // Adjust the color as needed
  },
  buttonText: {
    fontSize: 18,
    color: 'white', // Adjust the color as needed
  },
  buttonTouchable: {
    padding: 16,
    backgroundColor: 'red', // Adjust the color as needed
  },
});
