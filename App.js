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
      setBtc(`₹ ${(parseInt(res.data.rate))}`);
    }
    catch(e){
		setBtc(e.message)
    }
  },[]);
  React.useEffect(async ()=>{
    try{
        const res = await axios({
          method: 'GET',
          url: 'https://rest.coinapi.io/v1/exchangerate/ETH/INR',
          headers: {'X-CoinAPI-Key': '20541593-BB85-46BC-BF80-FEAA04B43B0D'}
      });
      setEth(`₹ ${(parseInt(res.data.rate))}`);
    }
    catch(e){
		setEth(e.message)
    }
  },[]);
  React.useEffect(async ()=>{
    try{
        const res = await axios({
          method: 'GET',
          url: 'https://rest.coinapi.io/v1/exchangerate/DOGE/INR',
          headers: {'X-CoinAPI-Key': '20541593-BB85-46BC-BF80-FEAA04B43B0D'}
      });
      setCoin(`₹ ${(parseInt(res.data.rate))}`);
    }
    catch(e){
		setCoin(e.message)
    }
  },[]);
  return (
	  <>
	  <View style={styles.header}>
	  	<Text style={styles.headerText}>Alkemy</Text>
	  </View>
    <View style={styles.container}>
      <View style={styles.btcWrap}>
	  		<Text style={styles.wrapHeading}>BTC</Text>
		  <Text style={styles.wrapText}>{btc}</Text>
	  </View>
	  <View style={styles.btcWrap}>
	  		<Text style={styles.wrapHeading}>ETH</Text>
		  <Text style={styles.wrapText}>{eth}</Text>
	  </View>
	  <View style={styles.btcWrap}>
	  		<Text style={styles.wrapHeading}>ETH</Text>
		  <Text style={styles.wrapText}>{dog}</Text>
	  </View>
      <StatusBar style="auto" />
    </View>
	</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
  btcWrap:{
	  backgroundColor:"#EC255A",
		padding:30,
		marginBottom:20,
		width:150
	},
	wrapText:{
		color:'#fff',
		fontWeight:"bold",
		textAlign:"center"
	},
	wrapHeading:{
		color:"#fff",
		fontWeight:"bold",
		fontSize:30,
		textAlign:'center'
	},
	header:{
		backgroundColor:"#161853",
		marginTop:40,
		paddingTop:10,
		paddingBottom:10

	},
	headerText:{
		textAlign:'center',
		fontSize:25,
		color:"white",
		fontWeight:"bold",
	}
});
