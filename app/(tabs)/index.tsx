import { Image, StyleSheet, Platform , View ,FlatList , Text, ScrollView, SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {
  const [data , useData] = useState([
    {
    name : "Hdfc Bank"  , 
    ceo : "Noel Quinn" , 
    },
    {
      name : "Axis Bank"  , 
      ceo : "S Vishvanath" , 
    },
    {
      name : "Bank of Boroda"  , 
      ceo : "Sanjiv chadha" , 
    },
    {
      name : "Canara Bank"  , 
      ceo : "L V Prabhakar" , 
    },
    {
      name : "City Union Bank"  , 
      ceo : "R Mohan" , 
    },
    {
      name : "Federal Bank"  , 
      ceo : "Shyam Srinivasan" , 
    },
    {
      name : "ICICI"  ,
      ceo : "Girish Chandra Chaturvedi" , 
    },
    {
      name : "IDBI"  , 
      ceo : "Rakesh Sharma" , 
    },
    {
      name : "Indus Bank"  , 
      ceo : "Sanjiv chadha" , 

    },
    {
      name : "Kotak Mahindra Bank"  , 
      ceo : "Uday Kotak" , 
      
    },
    {
      name : "Karnataka Bank"  , 
      ceo : "Mahabaleshwara" , 
    },
     
  
  ])
  return (

<ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <View>
        <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Banks and it's Ceo's List</ThemedText>
        
      </ThemedView>
      <SafeAreaView>
        <FlatList
        data={data}
        renderItem={({item})=>(
          <View style={{
            borderWidth: 0.5,
            borderRadius: 8,
            height: 100,
            marginTop:5,
            borderColor: "gray",
            backgroundColor: "lightblue"
          }}>
            <View >
            <Text style={{fontSize:16, fontWeight:"800", fontStyle:"italic", textAlign: "center", marginTop: 5}}>{item.name}</Text>
            <Text style={{width: "50%", marginLeft: 30 , marginTop:10}}> CEO -- {item.ceo}</Text>
            </View>
                 
          </View>
          
        )}
        
         />
      </SafeAreaView> 

        </View>

    </ParallaxScrollView>

    
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginTop:2,
    gap: 8,
    textAlign: "center"

  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
