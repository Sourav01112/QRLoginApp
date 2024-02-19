import React from 'react'
import { TouchableOpacity, Text ,Image} from 'react-native'
import ColorConstant from '../../constant/ColorConstant'

function Categories({title,uri,color,onPress,active}) {
    console.log("uri",uri);
    return (
        <TouchableOpacity style={{width:75,paddingVertical:15,backgroundColor: active ? ColorConstant.COOKNOW :color ? color : ColorConstant.SEARCHBOX,borderRadius:15,flexDirection:"column",alignItems:"center",justifyContent:"center",borderWidth:active ? 1 : 0 ,borderColor:"#bce694"}} onPress={onPress}>
            <Image style={{ height:22 ,width:22 }} source={{ uri: uri}} />
            <Text style={{color:color ? "black" : ColorConstant.SEARCHPLACEHOLDER,marginTop:8,fontSize:10}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Categories