import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const otpCode = generateOTP();
    setGeneratedOtp(otpCode);
    console.log(`Generated OTP (sent to email): ${otpCode}`);
  }, []);

  const handleVerify = () => {
    if (otp === generatedOtp) {
      setMessage("OTP verified successfully!");
      navigation.navigate("NewPassword");
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  const handleResendOTP = () => {
    const otpCode = generateOTP();
    setGeneratedOtp(otpCode);
    setMessage("A new OTP has been sent to your email.");
    console.log(`New Generated OTP (sent to email): ${otpCode}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        placeholder="Enter OTP"
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
      />
      <Button title="VERIFY" onPress={handleVerify} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <Text style={styles.resendText} onPress={handleResendOTP}>
        Didn't receive code? Resend
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  message: { textAlign: "center", color: "green", marginTop: 10 },
  resendText: { color: "blue", textAlign: "center", marginTop: 10 },
});

export default OTPScreen;
