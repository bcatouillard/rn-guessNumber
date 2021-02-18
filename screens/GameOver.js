import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import MainButton from "../components/MainButton";

import DefaultStyles from "../constants/default-styles";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The game is Over !</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              "https://cdn.vox-cdn.com/thumbor/7ngltsNfAD61P_XbIYxEq17NsPs=/0x0:778x778/920x0/filters:focal(0x0:778x778):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/10838149/poggers.jpg",
          }}
          style={styles.images}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ ...DefaultStyles.bodyText, ...styles.resultText }}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </Text>
      </View>
      <MainButton onPress={props.onRestart}>New game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  images: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  textContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  resultText: {
    textAlign: "center",
  },
});

export default GameOverScreen;
