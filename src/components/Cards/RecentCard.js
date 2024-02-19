import React from 'react'
import { View,Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'
import ColorConstant from '../../constant/ColorConstant'
import { useDispatch } from 'react-redux'
import { setSingleRecipe } from '../../Store/Actions/AuthAction'
import { useNavigation } from '@react-navigation/native'
import Screens from '../../constant/Screens'

function RecentCard({elm,index}) {
    const navigation = useNavigation()
    const dispatch = useDispatch()

  const handlePress = (elm) => {
    console.log("elm",elm);
    let updated = {};
    updated.recipe = elm

    dispatch(setSingleRecipe(updated))
    navigation.navigate(Screens.DETAILS)



  }
    return (
        <View style={{flexDirection:'row'}} key={{index}}>
         <View style={{padding:5}}>
         <Card style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
           <View style={{padding:4}}>
           <Image
                style={{ height: 80,width:100, borderRadius: 5}}
                source={{ uri: elm.image }}
            />
           </View>
           <View style={{alignSelf:'center'}}>
           <Text style={{color:'black',fontSize:12,fontWeight:700 ,marginHorizontal:10,marginVertical:5}}>{elm.recipeName}</Text>
           </View>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingVertical:3,backgroundColor:ColorConstant.CATEGORYPINK,margin:5,borderRadius:6}} onPress={()=>{handlePress(elm)}}>
                <Text style={{color:'black',fontWeight:600}}>Details</Text>
            </TouchableOpacity>
            </Card>

         </View>
        </View>
    )
}

export default RecentCard