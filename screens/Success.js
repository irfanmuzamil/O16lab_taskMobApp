import React from "react";
import { View, Text, Button } from "react-native";

const Success = ({ navigation, route }) => {
  const { message } = route.params;

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>{message}</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Success;
