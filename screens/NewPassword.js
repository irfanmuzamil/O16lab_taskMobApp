import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { resetPassword } from "../Services/api";

const NewPassword = ({ navigation, route }) => {
  const { email } = route.params;
  const [password, setPassword] = useState("");

  const handleResetPassword = async () => {
    try {
      await resetPassword({ email, password });
      navigation.navigate("Success", { message: "Password Reset Successful" });
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
      <Text>New Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1 }}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default NewPassword;
