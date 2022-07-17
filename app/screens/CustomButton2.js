import React from 'react';
import { StyleSheet,TouchableOpacity,Text } from 'react-native';

function CustomButton2({title,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text numberOfLines={1} style={styles.textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer :{
        backgroundColor: '#fc5c65',
        position: 'absolute',
        borderRadius: '50%',
        flex:1,
        flexDirection: 'column'
        
    }, 
    textStyle :{
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold'
        
    }
})

export default CustomButton2;