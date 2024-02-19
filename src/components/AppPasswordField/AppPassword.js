
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


function AppPassword({ title, important ,placeholder,value,error,onChangeText}) {
        const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: 500 }}>{title}</Text><Text style={{ color: "black", fontSize: 18 }}>{important && " *"}</Text>
            </View>
            <View style={{ flexDirection: 'row' ,backgroundColor:"#f6f6f6",borderColor:"lightgray",borderWidth:0.8,paddingHorizontal:20,marginTop:10,height:55,borderRadius:18}}>
                <TextInput  value={value} placeholderTextColor="black" placeholder={placeholder} onChangeText={onChangeText} style={{flex:1,color:"black"}} secureTextEntry={!isPasswordVisible} />
                <TouchableOpacity onPress={togglePasswordVisibility} style={{ height: 40, alignItems: "center", display: 'flex', justifyContent: 'center', color: "black",paddingTop:10 }} >
                  {  <Ionicons color={'black'} name={isPasswordVisible ? "eye-outline" :"eye-off-outline"} size={20} />}

                </TouchableOpacity>
            </View>
           {error && <Text style={{color:"red",fontSize:12,marginTop:10}}>{error} *</Text> }

        </View>
    )
}

export default AppPassword
