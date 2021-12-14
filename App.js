

import { StyleSheet, Text, View,StatusBar } from 'react-native';
import React from "react";
import axios from 'axios';
import { SafeAreaView } from 'react-navigation';

export default function App() {
  const [btc,setBtc] = React.useState("Test");
  const [eth,setEth] = React.useState("");
  const[dog,setCoin] = React.useState("");
  const[error,setError] = React.useState("");
  React.useEffect(async ()=>{
    try{
        const res = await axios({
          method: 'GET',
          url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
          headers: {'X-CMC_PRO_API_KEY': 'c83acf2c-208f-44e9-8621-ba1f66017ae4'}
      });
      setBtc(`₹ ${(parseInt(res.data.data[0].quote.USD.price))}`);
	  setEth(`₹ ${(parseInt(res.data.data[1].quote.USD.price))}`);
	  setCoin(`₹ ${(parseInt(res.data.data[2].quote.USD.price))}`);
    }
    catch(e){
		setBtc(e.message)
    }
  },[]);
  React.useEffect(async ()=>{
	  try{
		let x = await changeNavigationBarColor('#161853',true,true);
	  }
	  catch(e){
		  setError(e.message);
	  }
},[]);
  return (
	<>
	  <SafeAreaView>
	  <View style={styles.header}>
	  	<Text style={styles.headerText}>&#9889;Alkemy</Text>
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
				<Text style={styles.wrapHeading}>BNB</Text>
			<Text style={styles.wrapText}>{dog}</Text>
		</View>
    </View>
	<View style={styles.alert}>
		<Text style={styles.alertText}>
			This app is under maintenance. We will update you soon!
		</Text>
	</View>
	<StatusBar translucent={false} backgroundColor='#161853'/>
	</SafeAreaView>
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
		width:150,
		height:150
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
		marginTop:0,
		paddingTop:10,
		paddingBottom:10,
		marginBottom:300
	},
	headerText:{
		textAlign:'center',
		fontSize:25,
		color:"white",
		fontWeight:"bold",
	},
	alert:{
		backgroundColor:"#FFB6C1",
		justifyContent:'center',
		display:'flex',
		marginTop:250
	},
	alertText:{
		color:"#EC255A",
		padding:20,
		fontWeight:'bold'
	},
	StatusBar:{
		backgroundColor:'#161853'
	}
});
