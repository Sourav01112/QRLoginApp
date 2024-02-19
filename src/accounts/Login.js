import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AppStyles from '../constant/AppStyles'
import AppInput from '../components/AppInputComponent/AppInput'
import AppPassword from '../components/AppPasswordField/AppPassword'
import LandingButton from '../components/AppButtons/LandingButton'
import { regexEmail } from '../constant/RegexConstant'
import { createuser, loginuser } from '../constant/constant'
import { HitApi } from '../api/Api'
import { _setUserData } from '../navigation/storage/Storage'
import { setUserData, setCategories, setSingleRecipe, setRecipeData, setStepNo, setFavID, setResponse, setPagination } from '../Store/Actions/AuthAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function Login(props) {
  const navigation = useNavigation();

  const dispatch = useDispatch()

  const [email, setEmail] = useState("chaudhary.sourav.skc@gmail.com");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("Test@123");
  const [passwordError, setPasswordError] = useState("");
  const reduxUser = useSelector(state => state.AuthReducer)


  const navigatetoSignup = () => {
    navigation.navigate("Register")
    setEmailError('')
    setPasswordError('')
  }
  const handleOnPress = async () => {
    setEmailError('')
    setPasswordError('')
    if (email === '') {
      setEmailError("Field can't be empty")
    }
    if (password === '') {
      setPasswordError("Field can't be empty")
    }
    else if (!regexEmail.test(email)) {
      setEmailError("Invalid email")
    }
    else {

      let json = {
        email: email,
        password: password
      }
      console.log("json", json)
      dispatch(setUserData(null))
      dispatch(setCategories(null))
      dispatch(setSingleRecipe(null))
      dispatch(setRecipeData(null))
      dispatch(setStepNo(null))
      dispatch(setFavID(null))
      dispatch(setResponse(null))
      // dispatch(setPagination(null))
      console.log("loginuser", loginuser)



      // Specify your API endpoint URL
      try {
        const apiUrl = 'http://192.168.0.115:3001/api/user/login';

        // Make a GET request using Axios
        const response = await axios.post(apiUrl, json);
        const result = response.data.data

        console.log("ressss======++++++", response.data.data)
        if (result.city) {
          _setUserData(result)
          dispatch(setUserData(result))
          props.navigation.navigate("Dashboard")
        }
      } catch (error) {
        console.log("errrrrr", error)
      }

    }
  }



  return (
    <ScrollView style={AppStyles.BACKGROUNG_COLOR}>
      <View style={AppStyles.LOGIN_PADDING}>
        <View style={AppStyles.FLEX_CENTER}>
          <Image source={require('../AppImages/logo.png')} style={AppStyles.LOGIN_BANNER} />
        </View>
        <View>
          <Text style={AppStyles.COOK_UP_TEXT}>QR Login Auth!</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <AppInput title="Email" important={true} placeholder="Enter your email" value={email} onChangeText={text => setEmail(text)} error={emailError} />
          <AppPassword title="Password" placeholder="Password" important={true} value={password} onChangeText={text => setPassword(text)} error={passwordError} />
        </View>
        <View>
          <LandingButton title='Login' onPress={handleOnPress} />
          <View style={AppStyles.NAVIGATE_LOGIN}><Text style={{ color: "black" }}>Don't have  account ? </Text>
            <TouchableOpacity onPress={navigatetoSignup}>
              <Text style={{ fontWeight: 600, color: "black" }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default Login
