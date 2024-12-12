import { Image, StyleSheet, Text, View, ViewBase } from "react-native";
import React from "react";
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from "expo-status-bar";
import { wp, hp } from "../helpers/common";
import { theme } from "../constants/theme";

const Welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* welcome image */}
        <Image style={styles.welcomeImage} resizeMode="contain" source={require('../assets/images/welcome.png')} />

        {/* title */}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>LinkUp!</Text>
          <Text style={styles.punchline}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, officia.
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: wp(4)
  },

  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center'
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold
  },
  punchline: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text
  }
});