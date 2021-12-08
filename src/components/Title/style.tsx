import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    background:{
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c9c8c8'
      },
      containerLogo:{
        flex:0.5,
        justifyContent: 'center',
        backgroundColor: '#fff',
        width:'100%',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        alignItems:'center',
      },
      btnContainer:{
        width:'30%',
      },
      container:{
         flex:1, 
         alignItems: 'center',
         justifyContent: 'center',
         width: '90%',
         paddingBottom: 50,
      },
      input:{
          backgroundColor: 'transparent',
          width: '90%',
          marginTop: 20,
          marginBottom: 10,
          color: '#222',
          fontSize:17,
          padding:10,   
          borderBottomWidth: 2,
          borderBottomColor: 'black',     
          textAlign: 'left',
      },
      btnSubmit:{
        backgroundColor: '#FA4A0C',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 90
      },
      submitText:{
        color: '#fff',
        fontSize: 18,
      },
      btnRegister:{
        marginTop: 10,
      },
      registerText:{
        color:'#FA4A0C',
        width: '100%',
        fontWeight: 500  
      },
      loginView:{
        width: '70%'
      },
  });
  
  export default styles