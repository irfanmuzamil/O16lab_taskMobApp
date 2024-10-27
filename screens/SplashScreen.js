import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://your-image-url-here.png" }}
        style={styles.logo}
      />
      <Text style={styles.text}>O16LabTask</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: "#3498db",
    fontWeight: "bold",
  },
});

export default SplashScreen;
