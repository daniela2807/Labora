import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export function Heading({children,style,...props}){
     return (
            <View>
                <Text {...props} style={[styles.text, style]}>{children}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 32,
      },
})
