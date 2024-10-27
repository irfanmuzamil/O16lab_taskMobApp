import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { verifyOTP } from "../Services/api";

const OTPVerification = ({ navigation, route }) => {
  const { email } = route.params;
  const [otp, setOtp] = useState("");

  const handleVerifyOTP = async () => {
    try {
      await verifyOTP({ email, otp });
      navigation.navigate("NewPassword", { email });
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
      <Text>Enter OTP</Text>
      <TextInput
        value={otp}
        onChangeText={setOtp}
        style={{ borderBottomWidth: 1 }}
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

export default OTPVerification;
