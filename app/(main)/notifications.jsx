import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import Header from '../../components/Header'
import { wp } from '../../helpers/common'

const Notifications = () => {
    return (
        <ScreenWrapper bg="white">
            <View style={styles.container}>
                <Header title={"Notification"}/>
            </View>
        </ScreenWrapper>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        marginBottom: 30,
        paddingHorizontal: wp(4),
        gap: 15
    }
})