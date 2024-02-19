import React from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorConstant from '../../constant/ColorConstant';
import { Card, Surface } from 'react-native-paper';
import Screens from '../../constant/Screens';
import { setStepNo } from '../../Store/Actions/AuthAction'
import { useNavigation } from '@react-navigation/native';



function Details(props) {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const RecipeData = useSelector(state => state.AuthReducer)
    const handleSteps = (stepNo) => {
        dispatch(setStepNo(stepNo));
        navigation.navigate(Screens.STEPS)

    }
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons color={'black'} name={"arrow-back"} size={20} />
                </TouchableOpacity>
                <View><Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>{RecipeData?.singleRecipe?.recipe?.recipeName}</Text></View>
                <View>
                    <Ionicons color={'black'} name={"heart"} size={20} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30, paddingVertical: 20, justifyContent: 'space-between' }}>
                <View style={{ width: 60, flexDirection: 'column', alignItems: "center" }} >
                    <Image style={{ height: 25, width: 22 }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tyt-doc-upload.appspot.com/o/track-your-transport%2FpanFile%2F1705578759641png?alt=media&token=e8187116-1331-4b20-8330-f5d73119628d' }} />
                    <Text style={{ color: 'black', fontWeight: 600, marginTop: 5 }}>{RecipeData?.singleRecipe?.recipe?.duration}</Text>
                </View>
                <View style={{ width: 60, flexDirection: 'column', alignItems: "center" }} >
                    <Image style={{ height: 18, width: 22 }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tyt-doc-upload.appspot.com/o/track-your-transport%2FpanFile%2F1705578974838png?alt=media&token=5a4dd197-0bb7-4f42-8de8-8bb73ef494a9' }} />
                    <Text style={{ color: 'black', fontWeight: 600, marginTop: 5 }}>{RecipeData?.singleRecipe?.recipe?.type}</Text>
                </View>
                <View style={{ width: 60, flexDirection: 'column', alignItems: "center" }} >
                    <Image style={{ height: 22, width: 22 }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tyt-doc-upload.appspot.com/o/track-your-transport%2FpanFile%2F1705579106749png?alt=media&token=d9e57179-4109-47df-a37a-9153e787d33e' }} />
                    <Text style={{ color: 'black', fontWeight: 600, marginTop: 5 }}>{`${RecipeData?.singleRecipe?.recipe?.serving} serving`}</Text>
                </View>
            </View>
            <View>
                <Image style={{ height: 200, width: '100%' }} source={{ uri: RecipeData?.singleRecipe?.recipe?.image }}
                />
            </View>
            <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ color: 'black', fontWeight: 700, fontSize: 20 }}>Ingredients</Text>
                </View>
                <View style={{ backgroundColor: ColorConstant.SERVINGPINK, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 2 }}>
                    <Text style={{ color: 'black', fontSize: 15 }}>{`${RecipeData?.singleRecipe?.recipe?.serving} serving`}</Text>
                </View>

            </View>
            <View>
                {RecipeData?.singleRecipe?.recipe?.ingredients &&
                    RecipeData?.singleRecipe?.recipe?.ingredients.map((item, index) => {
                        return (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: (index % 2) == 0 ? ColorConstant.INGREDIRNTS : "white", paddingHorizontal: 15, paddingVertical: 3 }} key={index}>
                                <Text style={{ color: 'black', fontSize: 15, fontWeight: 500 }}>{item.name}</Text>
                                <Text style={{ color: 'black', fontSize: 15, fontWeight: 500, fontWeight: 700 }}>{item.quantity}</Text>
                            </View>

                        )
                    })}
            </View>
            <View style={{ padding: 20, marginVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ color: 'black', fontWeight: 700, fontSize: 20 }}>Preperation</Text>
                </View>
                <View style={{ backgroundColor: ColorConstant.PREPERATION, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 6 }}>
                    <Text style={{ color: 'black', fontSize: 15 }}>{RecipeData?.singleRecipe?.recipe?.duration}</Text>

                </View>

            </View>
            <View style={{ paddingHorizontal: 15 }}>
                <View style={{ marginBottom: 30 }}>
                    {RecipeData?.singleRecipe?.recipe?.steps?.map((item, index) => {

                        return (
                            <Card style={{ backgroundColor: 'white', marginTop: 14, paddingVertical: 6 }} key={index}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, gap: 10 }}>
                                        <Text style={{ color: 'black', fontWeight: 800, fontSize: 18 }}>{index + 1}.</Text>
                                        <Text style={{ color: 'black', fontSize: 14, marginTop: 4 }}>{item.step}</Text>

                                    </View>
                                    <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => { handleSteps(index + 1) }}>
                                        <Ionicons color={'black'} name={"play-circle"} size={28} />
                                    </TouchableOpacity>

                                </View>

                            </Card>

                        )
                    })


                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default Details