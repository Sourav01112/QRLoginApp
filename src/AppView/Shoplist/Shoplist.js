import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { setFavID, setRecipeData, setSingleRecipe } from '../../Store/Actions/AuthAction';
import { useNavigation } from '@react-navigation/native';
import Screens from '../../constant/Screens';
import ColorConstant from '../../constant/ColorConstant';
import { HitApi } from '../../api/Api';
import { getFavrouite } from '../../constant/constant';
import MyLottieAnimation from '../../components/Loader/MyLottieAnimation';
import LottieView from 'lottie-react-native';



function Shoplist(props) {
  const RecipeData = useSelector(state => state.AuthReducer)


  function callFavrouites() {
    let json = {
      page: RecipeData.pagination.page,
      limit: RecipeData.pagination.limit,
      search: {
        "user": RecipeData?.doc?.[0]?._id
      }
    }

    HitApi(json, getFavrouite).then(res => {
      dispatch(setFavID(res))

    })

  }

  if (RecipeData?.favId === null) {
    callFavrouites()
  }
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const handlePress = (item) => {
    let updated = {};
    updated.recipe = item
    dispatch(setSingleRecipe(updated))
    props.navigation.navigate(Screens.DETAILS)



  }

  console.log("RecipeData?.favId?.data?.recipes",RecipeData?.favId?.data?.recipes.length);

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Ionicons color={'black'} name={"arrow-back"} size={20} />
        </TouchableOpacity>
        <View><Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>{"Favrouite list"}</Text></View>
        <View>
          <Ionicons color={ColorConstant.THEMEPINK} name={"heart"} size={20} />
        </View>
      </View>
      {RecipeData?.favId?.data?.recipes.length ?

        <View>

          <View>
            <View style={{ marginTop: 25 }}>
              {
                RecipeData.favId.data.recipes.map((item, index) => {
                  return (
                    <Card style={{ backgroundColor: 'white', marginVertical: 10, marginHorizontal: 2, padding: 8 }} key={index}>
                      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20 }} onPress={() => { handlePress(item) }}>
                        <Image style={{ height: 60, width: 80, borderRadius: 5 }} source={{ uri: item.image }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                          <Text style={{ color: 'black' }}>{item.recipeName}</Text>
                          <View style={{ padding: 2 }}>
                            <Ionicons color={'black'} name={"chevron-forward-outline"} size={20} />
                          </View>
                        </View>

                      </TouchableOpacity>
                    </Card>

                  )
                })
              }

            </View>
          </View>
        </View>
        :
        <View style={{ flex:1, marginVertical: 150 ,alignItems:"center",justifyContent:'center',}}>
          <Image
            style={{ height: 200, width: 300 }}
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tyt-doc-upload.appspot.com/o/track-your-transport%2FpanFile%2F1705497640351jpg?alt=media&token=3e24a01e-bc37-409e-ac99-1dede593deb1' }}
          />

        </View>
      }
      {/* <MyLottieAnimation/> */}
    <LottieView source={require('../../components/Loader/animation.json')} autoPlay loop />
    </ScrollView>


  )
}

export default Shoplist