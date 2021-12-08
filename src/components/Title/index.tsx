import React, { useState, useEffect } from 'react'
import {
View, 
KeyboardAvoidingView, 
Image, 
TextInput, 
TouchableOpacity, 
Text, 
StyleSheet,
Animated
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './style';

export default function Title() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(()=> {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      })
    ]).start();

  }, []);

    return(
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
         
        </View>

        <Animated.View style={[
          styles.container,
          {
            borderColor: 'blue',
            width: '100%',
            height: '50%',
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ] 
          }
        ]}
          >

        <View style={styles.loginView}>
          <TextInput
          style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          onChangeText={()=> {}}
          />   

          <TextInput
          style={styles.input}
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={()=> {}}
          />  

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSubmit}>
            <Text
            style={{
              color:'#fff'
            }}
            >Login</Text>
          </TouchableOpacity>
        </View>

        </Animated.View>        
      </KeyboardAvoidingView>
    );
}


