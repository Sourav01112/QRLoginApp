import React from 'react'
import { View, Text, TextInput ,onChange} from 'react-native'

function AppInput({title,placeholder,important,value,error,onChangeText,keyboardType,maxLength}) {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: 500 }}>{title}</Text><Text style={{ color: "black", fontSize: 18 }}>{important && " *"}</Text>
            </View>
            <TextInput placeholderTextColor="black" placeholder={placeholder} value={value} onChangeText={onChangeText} style={{ borderWidth: 0.8, backgroundColor: '#f6f6f6', borderColor: 'lightgray', borderRadius: 18, height: 55, padding: 20, marginVertical: 10 ,color:"black"}}  keyboardType={keyboardType} maxLength={maxLength} />
          {error && <Text style={{color:"red",fontSize:12,marginBottom:5}}>{error} *</Text> }
        </View>
    )
}

export default AppInput
