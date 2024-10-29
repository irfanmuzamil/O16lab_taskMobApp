import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
// import CheckBox from "@react-native-community/checkbox";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {<Image source={require("../assets/logo.png")} style={styles.logo} />}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}></Text>
      </View>

      <Text style={styles.title}>Sign Up</Text>

      {/* Input Fields */}
      <View style={styles.row}>
        <TextInput
          placeholder="First Name"
          style={[styles.input, styles.halfInput]}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Last Name"
          style={[styles.input, styles.halfInput]}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

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
      <TextInput
        placeholder="Contact Number"
        style={styles.input}
        value={contactNumber}
        onChangeText={setContactNumber}
        keyboardType="phone-pad"
      />

      {/* Dropdown Picker */}
      <Picker
        selectedValue={selectedOption}
        style={styles.input}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        <Picker.Item label="How did you find us?" value="" />
        <Picker.Item label="Facebook" value="facebook" />
        <Picker.Item label="LinkedIn" value="linkedin" />
        <Picker.Item label="Instagram" value="instagram" />
      </Picker>
      <Button title="SIGN UP" onPress={() => navigation.navigate("Login")} />
      <TouchableOpacity>
        <Text style={styles.continueAsGuest}>Continue as guest</Text>
      </TouchableOpacity>

      {/* Social Media Options */}
      <View style={styles.socialContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Continue with</Text>
        <View style={styles.line} />
      </View>

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
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  halfInput: { width: "48%" },
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkboxText: { marginLeft: 10, color: "#555" },
  signupButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  signupButtonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: { color: "#007AFF", fontWeight: "bold" },
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
});

export default SignupScreen;
