import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { login } from "../Services/api";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      await login({ email, password });
      navigation.navigate("Success", { message: "Login Successful" });
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
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1 }}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
