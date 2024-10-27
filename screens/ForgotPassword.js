import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { forgotPassword } from "../Services/api";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      await forgotPassword({ email });
      navigation.navigate("OTPVerification", { email });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Image
        // source={require("../assets/logo.png")}
        style={{ alignSelf: "center" }}
      />
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1 }}
      />
      <Button title="Send OTP" onPress={handleForgotPassword} />
    </View>
  );
};

export default ForgotPassword;
