import { View, Text, Alert, useWindowDimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../AppView/Dashboard/Dashboard';
import Home from '../AppView/Home/Home';
import AppSearch from '../AppView/Search/AppSearch';
import Shoplist from '../AppView/Shoplist/Shoplist';
import Profile from '../AppView/Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from '../constant/Icons';
import ColorConstant from '../constant/ColorConstant';
import { setCategories, setFavID, setRecipeData, setResponse, setSingleRecipe, setStepNo, setUserData } from '../Store/Actions/AuthAction';
import { useDispatch } from 'react-redux';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const dispatch =useDispatch()
  const resetHomeStackOnTabPress = ({ navigation, route }) => ({
    tabPress: (e) => {
      // dispatch(setUserData(null))
      dispatch(setCategories(null))
      // dispatch(setSingleRecipe(null))
      dispatch(setRecipeData(null))
      // dispatch(setStepNo(null))
      dispatch(setFavID(null))
      // dispatch(setResponse(null))
    }
  })

  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? Icons.homeIcon.active : Icons.homeIcon.inactive;
          } 
          else if(route.name === "Search"){
            iconName = focused ? Icons.search.active : Icons.search.inactive;
          }
          else if(route.name === "Favlist"){
            iconName = focused ? Icons.Favlist.active : Icons.Favlist.inactive;
          }
          else if(route.name === "Profile"){
            iconName = focused ? Icons.Profile.active : Icons.Profile.inactive;
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: ColorConstant.THEMEPINK,
        tabBarInactiveTintColor: ColorConstant.THEMEBLACK,
        unmountOnBlur: true,
        tabBarItemStyle:{padding:5},
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={AppSearch}  listeners={resetHomeStackOnTabPress}/>
        <Tab.Screen name="Favlist" component={Shoplist} listeners={resetHomeStackOnTabPress}/>
        <Tab.Screen name="Profile" component={Profile} listeners={resetHomeStackOnTabPress}/>



        
      </Tab.Navigator>
  )
}