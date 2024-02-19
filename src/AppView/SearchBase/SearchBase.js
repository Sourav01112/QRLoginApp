import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import ColorConstant from '../../constant/ColorConstant'
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchBase({ Hidefilter,inputSearch,onChangeText ,onPress}) {
  return (
    <View >
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: ColorConstant.SEARCHBOX, alignItems: "center", borderRadius: 10, paddingHorizontal: 15 }}>
          <TextInput placeholder='EX: Veg Burger' placeholderTextColor={ColorConstant.SEARCHPLACEHOLDER} style={{color:'black',flex:1}} value={inputSearch} onChangeText={onChangeText}/>
        </View>

         <TouchableOpacity style={{ backgroundColor: ColorConstant.SEARCHBOX, padding: 14, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: 10 }} onPress={onPress}><Ionicons name={'search'} color={ColorConstant.SEARCHPLACEHOLDER} size={22} /></TouchableOpacity>
      </View>
    </View>
  )
}

export default SearchBase
