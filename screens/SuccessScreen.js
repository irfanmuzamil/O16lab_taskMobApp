import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SuccessScreen = ({ navigation }) => {
  const handleLoginRedirect = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.successIcon}>✅</Text>
      <Text style={styles.title}>Password Updated Successfully</Text>
      <Button title="Go to Login" onPress={handleLoginRedirect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  successIcon: { fontSize: 48, marginBottom: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
});

export default SuccessScreen;
