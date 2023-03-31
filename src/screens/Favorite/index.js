import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  
  
} from 'react-native';
export default function Favorite () {
const Messagerie = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'mohamed',
    image:require('../../assets/onboarding/plante1.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'francois',
    image:require('../../assets/onboarding/plante1.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ali',
    image:require('../../assets/onboarding/Rectangle 1plantes.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hattem',
    image:require('../../assets/onboarding/Rectangle 1plantes.jpg'),
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:require('../../assets/onboarding/Rectangle 1plantes.jpg'),
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:require('../../assets/onboarding/Rectangle 1plantes.jpg'),
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:require('../../assets/onboarding/Rectangle 1plantes.jpg'),
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:require('../../assets/onboarding/Rectangle 1plantes.jpg'),
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:require('../../assets/onboarding/Rectangle 1plantes.jpg'),
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:require('../../assets/onboarding/Rectangle 1plantes.jpg'),
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:require('../../assets/onboarding/Rectangle 1plantes.jpg'),
  },
  
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:require('../../assets/onboarding/Rectangle 1plantes.jpg'),
  },
];

const Message= ({item}) => (
  <View style={styles.item}>
    <View style={styles.avatarContainer}>
        <Image   Source ={item.image} style={styles.avatar} ></Image>
    </View>
    <Text style={styles.title}>{item.title}</Text>
    
  </View>
);
headerComponent=()=>{
    return <Text style={styles.listHeadline}>Messagerie</Text>
}
itemSeparator= ()=>{
    return<View style={styles.separator}/>
}

  return (
    
    <SafeAreaView style={styles.container}>
      <FlatList
      ListHeaderComponentStyle={styles.listHeader}
     ListHeaderComponent={headerComponent}
        data={Messagerie}
        renderItem={Message }
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={<Text></Text>}
      />
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  
},
avatarContainer:{
backgroundColor:'grey',
borderRadius:100,
height:89,
width:89,
justifyContent:'center',
alignItems:'center'
},

avatar:{
    height:40,
    width:40,
},
listHeadline:{
    color:"red",
    fontSize:21,
    fontWeight:'bold'
},

listHeader:{
    height:55,
    alignItems:'center',
    justifyContent:'center'
},
item:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:13,

},

name:{
    fontSize:16,
    fontWeight:'600',
    marginLeft13:13,

},
separator:{
    height:1,
    width:'100%',
    backgroundColor:'#ccc',
}
});

