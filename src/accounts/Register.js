import React, { useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import AppStyles from '../constant/AppStyles';
import AppInput from '../components/AppInputComponent/AppInput';
import LandingButton from '../components/AppButtons/LandingButton';
import AppPassword from '../components/AppPasswordField/AppPassword';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { regexEmail } from '../constant/RegexConstant';
import { HitApi } from '../api/Api';
import { createuser } from '../constant/constant';

function Register(props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [contact, setContact] = useState('')
  const [contactError, setContactError] = useState('')

  const [passwordError, setPasswordError] = useState("");
  const [count, setCount] = useState(1)

  const navigatetoLogin = () => {
    props.navigation.navigate('Login')
    setEmailError('')
    setPasswordError('')
    setNameError('')
    setContactError('')
  }
  const handleOnPress = () => {
    setEmailError('')
    setPasswordError('')
    setNameError('')
    setContactError('')


    if(count == 1){
      if (name === '' ) {
        setNameError("Field can't be empty")
      }
     else if (contact === '' ) {
        setContactError("Field can't be empty")
      }
     else if(contact.length != 10 && contact !== ''){
        setContactError("Invalid number")


      }
      else{
        setCount(2)
      }

    }
  if(count === 2){
    if (email === '' ) {
      setEmailError("Field can't be empty")
    }
    else if (!regexEmail.test(email)) {
      setEmailError("Invalid email")
    }
   else if (password === '') {
      setPasswordError("Field can't be empty")

    }
    
    else {
      let json = {
        email: email,
        password: password,
        contact :contact,
        name : name
      }
      HitApi(json, createuser)
        .then(res => {
        if(res.message === "User Added successfully"){
          navigatetoLogin()
        }
        })

        .catch((err) => {
          setPasswordError(err)

        })
    }

  }

 
   
  }
  return (
    <ScrollView style={AppStyles.BACKGROUNG_COLOR}>
      <View style={AppStyles.LOGIN_PADDING}>
        <View style={AppStyles.FLEX_CENTER}>
          <Image source={require('../AppImages/loginBanner.png')} style={AppStyles.SIGNUP_BANNER} />
        </View>
        <View>
          <Text style={AppStyles.COOK_UP_TEXT}>CookUP!</Text>
          <Text style={AppStyles.CREATE_ACCOUT_TEXT}>Create an account to continue</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          {count === 1 ?
            <>
              <AppInput title="Name" important={false} placeholder="Enter your name" value={name} onChangeText={text => setName(text)} error={nameError} />
              <AppInput title="Phone" important={false} placeholder="Enter your phone" value={contact} onChangeText={text => setContact(text)} error={contactError} keyboardType={'numeric'} maxLength={10}/>
            </>
            : 
          <>
            <AppInput title="Email" important={false} placeholder="Enter your email" value={email} onChangeText={text => setEmail(text)} error={emailError} />
          <AppPassword title="Password" placeholder="Password" important={false} value={password} onChangeText={text => setPassword(text)} error={passwordError} />
          </>
        }

        </View>
        <View>
          { count === 1 ? <LandingButton title="Next" onPress={handleOnPress} /> :<LandingButton title="Sign up" onPress={handleOnPress} /> }
          <View style={AppStyles.NAVIGATE_LOGIN}><Text style={{ color: 'black' }}>Already have an account ? </Text>
            <TouchableOpacity onPress={navigatetoLogin}>
              <Text style={{ fontWeight: 600, color: "black" }}> Log in</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default Register
