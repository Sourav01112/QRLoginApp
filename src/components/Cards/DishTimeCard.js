import React from 'react'
import { View, Text, Image, Alert, TouchableOpacity ,Vibration} from 'react-native'
import { Card } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ColorConstant from '../../constant/ColorConstant';
import Screens from '../../constant/Screens';
import { useDispatch, useSelector } from 'react-redux';
import { setFavID, setNavigationProp, setRecipeData, setResponse, setSingleRecipe } from '../../Store/Actions/AuthAction';
import { HitApi } from '../../api/Api';
import { addFavrouite, deleteFavrouite } from '../../constant/constant';


function DishTimeCard({ item, props, index }) {
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


  const handelDetails = () => {
    props.navigation.navigate(Screens.DETAILS)

    dispatch(setSingleRecipe(item))
    dispatch(setNavigationProp(props))
  }
  return (
    <Card style={{ backgroundColor: "white" }} >
      <TouchableOpacity style={{ padding: 10 }} onPress={handelDetails}>
        <View style={{ zIndex: 400, position: "absolute", right: 0}} >
          <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 5  ,paddingHorizontal:15,paddingVertical:15}} onPress={hadleFavrouite}>
            <View style={{ flexDirection: "row", columnGap: 5, alignItems: "center", backgroundColor: item.isFavrouite ? "#ffffff" : '#dddcdbb8', paddingHorizontal: 6, paddingVertical: 5, borderRadius: 20 }}>
             <View >
             <Ionicons color={item.isFavrouite ? ColorConstant.THEMEPINK : 'white'} name={"heart"} size={20} style={{ backgroundColor: "#dddcdb00" }} />
             </View>
            </View>
          </TouchableOpacity>


        </View>
        <Image
          style={{ height: 150, borderRadius: 10 }}
          source={{ uri: item.recipe.image }}
        />
        <View style={{ marginTop: 10, width: 135 }}>
          <Text style={{ color: "black", fontSize: 12, fontWeight: 400 }}>{item.recipe.duration}</Text>
          <Text style={{ color: "black", fontSize: 12, fontWeight: 700 }}>{item.recipe.recipeName}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  )
}

export default DishTimeCard