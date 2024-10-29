import React from "react";
import AppNavigator from "./AppNavigator";
import { AuthProvider } from "./screens/components/context/AuthContext";

const App = () => (
  <AuthProvider>
    <AppNavigator />
  </AuthProvider>
);

export default App;
