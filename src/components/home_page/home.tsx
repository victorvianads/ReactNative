import React, { useState, useEffect } from 'react'
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native'

import styles from './style';

export default function home(){
    return(
        <View style={styles.background}>
            <View>

            </View>

            <View>
                <TouchableOpacity>
                    <Text>Começar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}