import React from 'react';
import { StyleSheet,TouchableOpacity,Text } from 'react-native';

function CustomButton({title,onPress}) {
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
        backgroundColor: '#DED339',
        position: 'absolute',
        borderRadius: 10,
        flex:1,
        flexDirection: 'column'
        
    }, 
    textStyle :{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
        
    }
})

export default CustomButton;