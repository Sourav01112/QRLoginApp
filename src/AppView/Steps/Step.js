import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ColorConstant from '../../constant/ColorConstant';
import { setStepNo } from '../../Store/Actions/AuthAction';



function Step() {
    const dispatch = useDispatch()
    const [hindi ,setHindi] = useState(false)
    const [render, setRender] = useState(Date.now())
    const RecipeData = useSelector(state => state.AuthReducer)
    let currentStep = RecipeData.singleRecipe.recipe.steps[RecipeData.step - 1]

    const switchStep = (step) => {
        dispatch(setStepNo(step))
        setRender(Date.now)

    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'white' }}>
            <View>
                <Image style={{ height: 200, width: '100%' }} source={{ uri: RecipeData.singleRecipe.recipe.image }} />
                <View style={{ marginVertical: 20 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, alignItems: 'start' }}>
                        <Image style={{ height: 20, width: 20 }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tyt-doc-upload.appspot.com/o/track-your-transport%2FpanFile%2F1705658599813png?alt=media&token=fd94bb94-dad6-47eb-8cd5-1e79740c4bd9' }} />
                        <View style={{ paddingHorizontal: 10 }}>
                            <Text style={{ color: 'black' }}>{currentStep?.ingredient} </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, alignItems: 'start' }}>
                        <Image style={{ height: 20, width: 20 }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tyt-doc-upload.appspot.com/o/track-your-transport%2FpanFile%2F1705658995884png?alt=media&token=87fc3851-a162-455a-b1b4-1d1b26c936a0' }} />
                        <View style={{ paddingHorizontal: 10 }}>
                            <Text style={{ color: 'black' }}>{currentStep?.utensil} </Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 2, backgroundColor: 'rgb(233 233 233)', width: '90%', marginHorizontal: 20 }}></View>
                <View style={{ padding: 20 }}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{ color: 'black', fontWeight: 700, fontSize: 20 }}>{`Step ${RecipeData?.step}`}</Text>
                    <TouchableOpacity onPress={()=>{setHindi(!hindi)}}>
                    <Ionicons color={ColorConstant.PROCEED} name={"language"} size={25} />
                    </TouchableOpacity>

                    </View>
                     <Text style={{ color: 'black', marginTop: 20, fontSize: 16 }}>{hindi ?currentStep.Hindi : currentStep?.description}</Text>

                </View>

            </View>
            <View>
                {RecipeData.step !== RecipeData.singleRecipe.recipe.steps.length &&
                <TouchableOpacity style={{ paddingRight:20, marginBottom: 20 }} onPress={()=>{switchStep(RecipeData.step+1)}}>
                    <View style={{ flexDirection: 'row', columnGap: 10, justifyContent: "flex-end" }}>
                        <Text style={{ color: ColorConstant.PROCEED, fontSize: 16 }}>Proceed</Text>
                        <Ionicons color={ColorConstant.PROCEED} name={"arrow-forward"} size={20} />
                    </View>

                </TouchableOpacity>
                }
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    {
                        RecipeData.singleRecipe.recipe.steps.map((_, index) => {
                            return (
                                <TouchableOpacity style={{ backgroundColor: index < RecipeData.step ? ColorConstant.STEPGREEN : "#f6f6f6", flex: 1, alignItems: 'center', paddingVertical: 20, borderWidth: 2, borderTopWidth: 0, borderBottomWidth: 0, borderColor: 'white' }} key={index} onPress={() => { switchStep(index + 1) }}>
                                    <Text style={{ color: 'black', fontWeight: 700 }} >
                                        {index + 1}
                                    </Text>
                                </TouchableOpacity>

                            )
                        })

                    }

                </View>
            </View>


        </View>
   
    )
}

export default Step