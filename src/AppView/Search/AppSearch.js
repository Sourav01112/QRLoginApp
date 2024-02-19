import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import SearchBase from '../SearchBase/SearchBase'
import Categories from '../../components/AppButtons/Categories'
import ColorConstant from '../../constant/ColorConstant'
import { HitApi } from '../../api/Api'
import { getCategory, getFavrouite, getRecipe } from '../../constant/constant'
import SerachDetailCard from '../../components/Cards/SerachDetailCard'
import { useDispatch, useSelector } from 'react-redux'
import { setRecipeData } from '../../Store/Actions/AuthAction'

export default function AppSearch() {
  const RecipeData = useSelector(state => state.AuthReducer)
  const dispatch = useDispatch()

  const [categories, setCategories] = useState('')
  const [selectedCategory, setSelectedCategory] = useState({ category: 'Meat', categoryID: '65a6595045d542f7691f8314' })
  const [inputSearch, SetInputSearch] = useState("")
  if (categories === '') {
    let json = {
      page: 1,
      limit: 10,
    }

    HitApi(json, getCategory).then(res => {
      setCategories(res.data.docs)
    })


  }
  const hadelCategory = (item) => {
    let temp = selectedCategory
    temp.category = item?.categoryName
    temp.categoryID = item?._id

    console.log('temp',temp);

    setSelectedCategory(temp)
    SetInputSearch('')
    callRacipe("withoutSearch")
  }


  function callRacipe(type) {

    console.log('RecipeData', RecipeData);


    // dispatch(setUserData(doc))
    var json

    if (type === 'withoutSearch') {
      json = {
        page: RecipeData.pagination.page,
        limit: RecipeData.pagination.limit,
        user: RecipeData.doc[0]._id,
        search: {
          "category": selectedCategory.categoryID
        }

      }


    }
    if (type === 'inputSearch') {

      setSelectedCategory({category: '', categoryID: ''})

      json = {
        page: RecipeData.pagination.page,
        limit: RecipeData.pagination.limit,
        user: RecipeData.doc[0]._id,
        search: {
          "$text": {
            $search: inputSearch
          },
        }
      }


    }

    HitApi(json, getRecipe).then(res => {

      console.log("response+++++++++++++++++++", res);
      dispatch(setRecipeData(res?.data))
    })

  }


  function callCategory() {
    let json = {
      page: RecipeData.pagination.page,
      limit: RecipeData.pagination.limit
    }
    HitApi(json, getCategory).then(res => {
      dispatch(setCategories(res.data.docs))
    })

  }
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


  if (RecipeData.recipeDoc === null) {
    callRacipe("withoutSearch")

  }
  if (RecipeData.favId === null) {
    callFavrouites()
  }

  const hadleSearch = () => {
    callRacipe("inputSearch")
    
  }

  const handlePress = (elm) => {
    console.log("elm",elm);
    let updated = {};
    updated.recipe = elm

    dispatch(setSingleRecipe(updated))
    navigation.navigate(Screens.DETAILS)



  }


  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
     <View style={{marginBottom:30}}>
     <Text style={{ color: 'black', fontSize: 25, fontWeight: 700 }}>Search</Text>
      <View style={{ marginTop: 25 }}>
        <SearchBase inputSearch={inputSearch} onChangeText={Text => SetInputSearch(Text)} onPress={hadleSearch} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: 'black', fontWeight: 600, fontSize: 18 }}>Filter by</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: 'black', fontWeight: 500, fontSize: 16 }}>Categories</Text>
        <View style={{ marginTop: 20 }}>
          {categories &&
            <View style={{ flexDirection: "row", gap: 8, alignItems: "center", alignSelf: "center", flexWrap: 'wrap' }}>
              {categories.map((item, index) => {
                return (
                  <View key={index} >
                    <Categories title={item.categoryName} uri={item.image} color={ColorConstant.CATEGORYPINK} onPress={() => hadelCategory(item)} active={(item?.categoryName === selectedCategory?.category) ? true : false} />
                  </View>
                )
              })}

            </View>

          }
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 600 }}>
            Search results for
          </Text>
          <Text style={{ color: '#858585ff', fontSize: 20, marginTop: 5 }}>
            {`"${inputSearch ? inputSearch : selectedCategory?.category}"`}

          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <View>
            {RecipeData.recipeDoc ?
              <View style={{ flexDirection: 'column' }} >
                {RecipeData.recipeDoc?.map((item, index) => {
                  return (
                    <View key={index} >
                      <SerachDetailCard index={index} item={item} />
                    </View>

                  )
                })
                }
              </View>
              :
              <View>
                <View style={{ flex: 1, marginVertical: 150, alignItems: "center", justifyContent: 'center', }}>
                  <Image
                    style={{ height: 200, width: 300 }}
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tyt-doc-upload.appspot.com/o/track-your-transport%2FpanFile%2F1705497640351jpg?alt=media&token=3e24a01e-bc37-409e-ac99-1dede593deb1' }}
                  />

                </View>
              </View>


            }
          </View>
        </View>

      </View>
     </View>
    </ScrollView>
  )
}