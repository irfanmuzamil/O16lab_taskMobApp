import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { signup } from "../Services/api";

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signup({ firstName, lastName, email, password });
      navigation.navigate("Login");
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
      <Text>First Name</Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        style={{ borderBottomWidth: 1 }}
      />
      <Text>Last Name</Text>
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        style={{ borderBottomWidth: 1 }}
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
      <Button title="Sign Up" onPress={handleSignup} />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
