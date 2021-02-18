import React from "react";
import { View, StyleSheet, Image } from "react-native";

import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is Over !</TitleText>
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
        <BodyText style={styles.resultText }>
          Your phone needed{" "}
          <BodyText style={styles.highlight}>{props.roundsNumber}</BodyText> rounds to
          guess the number{" "}
          <BodyText style={styles.highlight}>{props.userNumber}</BodyText>
        </BodyText>
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
