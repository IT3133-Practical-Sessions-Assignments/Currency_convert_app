import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";



export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("LKR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [error, setError] = useState("");

  const [fromCurrencyOpen, setFromCurrencyOpen] = useState(false);
  const [toCurrencyOpen, setToCurrencyOpen] = useState(false);

  const conversionRates = {
    USD: { LKR: 320, EUR: 0.85 },
    LKR: { USD: 0.0031, EUR: 0.0026 },
    EUR: { USD: 1.18, LKR: 380 },
  };
  

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

