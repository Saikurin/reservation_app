import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";  
import DatePicker from 'react-native-modern-datepicker';
import { Button, Card } from "react-native-paper";


export default function PriseRdvScreen({ navigation }: RootStackScreenProps<'PriseRdv'>) {
  const TimePickerExample = () => {
    const [time, setTime] = useState('');}
    return(
        <View style={styles.container}>
          <Text>teste </Text>



      
        </View> 
    )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

