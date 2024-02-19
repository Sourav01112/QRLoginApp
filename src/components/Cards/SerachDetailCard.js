import React from 'react'
import { View, Text, Image, TouchableOpacity, Vibration } from 'react-native'
import { Card } from 'react-native-paper'
import CooknowButton from '../AppButtons/CooknowButton'
import ColorConstant from '../../constant/ColorConstant'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux'
import { HitApi } from '../../api/Api'
import { addFavrouite, deleteFavrouite } from '../../constant/constant'
import { setRecipeData, setSingleRecipe } from '../../Store/Actions/AuthAction'
import Screens from '../../constant/Screens'
import { useNavigation } from '@react-navigation/native'

function SerachDetailCard({index,item,props}) {
  const navigation = useNavigation()

    const RecipeData = useSelector(state => state.AuthReducer)
    const dispatch = useDispatch()
  
    const hadleFavrouite = () =>{
     
      let json ={
        user : RecipeData?.doc?.[0]?._id,
        recipe :item.recipe._id
      }
      if(item.isFavrouite){
        HitApi(json, deleteFavrouite).then(res => {
  
  
          var oldData = RecipeData
         
          oldData.recipeDoc[index].isFavrouite = false
  
          console.log('oldData',oldData);
  
          dispatch(setRecipeData(oldData.recipeDoc))
          dispatch(setFavID(null))
          dispatch(setResponse(false))
     
    
        })
      }
      else {
        HitApi(json, addFavrouite).then(res => {
  
          console.log('json',json);
          console.log('res',res);
  
         
  
          var oldData = RecipeData
         
          oldData.recipeDoc[index].isFavrouite = true
  
          console.log('oldData',oldData);
  
  
          dispatch(setRecipeData(oldData.recipeDoc))
          dispatch(setFavID(null))
          dispatch(setResponse(true))
  
          
          setTimeout(() => {
            dispatch(setResponse(false))
          }, 4000);
  
        })
  
      }
      Vibration.vibrate(120)
  
    }
  
  
    const handlePress = (elm) => {
      dispatch(setSingleRecipe(elm))
      navigation.navigate(Screens.DETAILS)
    }
    return (
        <Card style={{ backgroundColor: "white", padding: 10, margin: 5 }}>
            <View>
            <View style={{ zIndex: 400, position: "absolute", right: 0}} >
          <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 5  ,paddingHorizontal:15,paddingVertical:15}} onPress={hadleFavrouite}>
            <View style={{ flexDirection: "row", columnGap: 5, alignItems: "center", backgroundColor: item.isFavrouite ? "#ffffff" : '#dddcdbb8', paddingHorizontal: 6, paddingVertical: 5, borderRadius: 20 }}>
             <View >
             <Ionicons color={item.isFavrouite ? ColorConstant.THEMEPINK : 'white'} name={"heart"} size={20} style={{ backgroundColor: "#dddcdb00" }} />
             </View>
            </View>
          </TouchableOpacity>


        </View>
            </View>
            <Image
                style={{ height: 150, borderRadius: 10 }}
                source={{  uri: item.recipe.image }}
            />
            <View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', marginTop: 10 }}>
                    <View>
                        <Text style={{ color: 'black', fontWeight: '500' }}>{item.recipe.recipeName} </Text>

                    </View>
                    <View>
                        <TouchableOpacity style={{ backgroundColor: ColorConstant.COOKNOW, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10 }} onPress={()=>{handlePress(item)}}>
                            <Text style={{ color: "black", fontWeight: 700 }}>
                               Details
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Card>
    )
}

export default SerachDetailCard