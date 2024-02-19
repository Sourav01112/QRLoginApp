import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBase from '../SearchBase/SearchBase'
import HomeCard from '../../components/Cards/HomeCard'
import ColorConstant from '../../constant/ColorConstant'
import Categories from '../../components/AppButtons/Categories'
import { HitApi } from '../../api/Api'
import { getCategory, getFavrouite, getRecipe } from '../../constant/constant'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { _getUserData } from '../../navigation/storage/Storage'
import { setCategories, setFavID, setRecipeData, } from '../../Store/Actions/AuthAction'
import DishTimeCard from '../../components/Cards/DishTimeCard'
import { Card } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';



export default function Home(props) {


  return (
    <View>
      <ScrollView style={{ backgroundColor: "white", padding: 15 }}>

      </ScrollView >


    </View>
  )
}