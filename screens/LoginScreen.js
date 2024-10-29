import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { AuthContext } from "./components/context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { setAuthData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setAuthData({ email, password });
    navigation.navigate("Success");
  };

  return (
    <View style={styles.container}>
      {<Image source={require("../assets/logo.png")} style={styles.logo} />}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}></Text>
      </View>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <Button title="LOGIN" onPress={handleLogin} />
      <Text
        onPress={() => navigation.navigate("ForgotPassword")}
        style={styles.link}
      >
        Forgot password?
      </Text>
      <Text onPress={() => navigation.navigate("Signup")} style={styles.link}>
        Don't have an account? Sign Up
      </Text>
      <TouchableOpacity>
        <Text style={styles.continueAsGuest}>Continue as guest</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <FontAwesome name="google" size={32} color="#4285F4" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={32} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-apple" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  passwordInput: { flex: 1 },
  forgotPassword: { textAlign: "right", color: "#007AFF", marginTop: 10 },
  loginButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 20,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  logoContainer: { alignItems: "center", marginBottom: 20 },
  logo: {
    fontSize: 5,
    marginLeft: 110,
    paddingTop: 35,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    fontWeight: "normal",
    color: "#007AFF",
    size: 20,
  },
  signupText: { color: "#007AFF", fontWeight: "bold" },
  continueAsGuest: { color: "#007AFF", textAlign: "center", marginTop: 10 },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: { flex: 1, height: 1, backgroundColor: "#ddd" },
  orText: { marginHorizontal: 10, color: "#888" },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  link: { color: "blue", marginTop: 10, textAlign: "center" },
});

export default LoginScreen;
