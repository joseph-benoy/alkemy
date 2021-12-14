import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import axios from 'axios';
export default function App() {
  const [btc,setBtc] = React.useState("Test");
  const [eth,setEth] = React.useState("");
  const[dog,setCoin] = React.useState("");
  const[error,setError] = React.useState("");
  React.useEffect(async ()=>{
    try{
        const res = await axios({
          method: 'GET',
          url: 'https://rest.coinapi.io/v1/exchangerate/BTC/INR',
          headers: {'X-CoinAPI-Key': '20541593-BB85-46BC-BF80-FEAA04B43B0D'}
      });
      setBtc(res.data.rate);
    }
    catch(e){
		setBtc(e.message)
    }
  },[]);
  return (
    <View style={styles.container}>
      <Text>{btc}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
});
