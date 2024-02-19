import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button, Card } from 'react-native-paper';
import CooknowButton from '../AppButtons/CooknowButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ColorConstant from '../../constant/ColorConstant';



function HomeCard() {
    return (
        <Card style={{ backgroundColor: "white", padding: 10, margin: 5 }}>
            <View>
                <View style={{zIndex:400,position:"absolute",padding:2,top:5,width:'100%'}} >
              <View style={{flexDirection:"row", justifyContent:'space-between',paddingHorizontal:5}}>
              <View style={{flexDirection:"row",columnGap:5,alignItems:"center",backgroundColor:ColorConstant.FAVCOLOR,paddingHorizontal:8,paddingVertical:5,borderRadius:6}}>
               <Ionicons  name={"star"} size={15} color = {ColorConstant.THEMEPINK}/>
               <Text style={{color:"black"}}>4.9</Text>
               </View>
               <View style={{flexDirection:"row",columnGap:5,alignItems:"center",backgroundColor:'rgb(228 230 232)',paddingHorizontal:7,paddingVertical:5,borderRadius:20}}>
               <Ionicons  name={"heart"} size={15} color = {'white'}/>
               </View>
              </View>
                </View>
            </View>
            <Image
                style={{ height: 150, borderRadius: 10 }}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tyt-doc-upload.appspot.com/o/track-your-transport%2FpanFile%2F1705327685998jpg?alt=media&token=d0cf05e5-71d2-49e5-a3e5-89c071c602af' }}
            />
            <View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', marginTop: 10 }}>
                    <View>
                        <Text style={{ color: 'black', fontWeight: '500' }}>Creamy Funghi Risotto 🍁 </Text>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ color: "black" }}> Healthy . Vegetarian . Dinner</Text>
                        </View>
                    </View>
                    <View>
                        <CooknowButton />                    
                    </View>
                </View>
            </View>
        </Card>
    )
}

export default HomeCard