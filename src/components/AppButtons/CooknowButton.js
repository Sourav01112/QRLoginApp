import React from 'react'
import { View,Text } from 'react-native'
import ColorConstant from '../../constant/ColorConstant'

function CooknowButton() {
    return (
       <View style={{backgroundColor:ColorConstant.COOKNOW,paddingHorizontal:16,paddingVertical:8,borderRadius:10}}>
        <Text style={{color:"black",fontWeight:700}}>
            Cook now
        </Text>
       </View>
    )
}

export default CooknowButton