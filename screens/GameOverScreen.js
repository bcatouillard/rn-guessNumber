import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Dimensions, ScrollView } from "react-native";

import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The game is Over !</TitleText>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              width: availableDeviceWidth * 0.7,
              height: availableDeviceWidth * 0.7,
              borderRadius: (availableDeviceWidth * 0.7) / 2,
              marginVertical: availableDeviceHeight / 30,
            },
          }}
        >
          <Image
            source={require("../assets/success.png")}
            style={styles.images}
            resizeMode="cover"
          />
        </View>
        <View style={{...styles.textContainer, ...{marginVertical: availableDeviceHeight / 60}}}>
          <BodyText style={{...styles.resultText, ...{fontSize: availableDeviceHeight < 400 ? 16 : 20}}}>
            Your phone needed{" "}
            <BodyText style={styles.highlight}>{props.roundsNumber}</BodyText>{" "}
            rounds to guess the number{" "}
            <BodyText style={styles.highlight}>{props.userNumber}</BodyText>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>New game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
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
    marginHorizontal: 30
  },
  resultText: {
    textAlign: "center",
  },
});

export default GameOverScreen;
