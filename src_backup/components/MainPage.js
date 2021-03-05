import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

class MainPage extends React.Component{
  
  
  render(){
    return(
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ddd',
      flex: 1,
      paddingTop: 30,
    },

    target:{
      fontSize:40,
      backgroundColor: '#aaa',
      margin: 50,
      textAlign:'center',
    },

    numbers:{
      backgroundColor: "#FFFFFF",
      width: 100,
      marginHorizontal: 15,
      marginVertical: 25,
      fontSize: 35,
      textAlign: 'center',
    },

    numberContainer:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent: 'space-around'
    },
  
  });

  export default MainPage;