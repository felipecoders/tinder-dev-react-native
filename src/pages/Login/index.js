import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Platform } from "react-native";

import api from "../../services/api";

import Logo from "../../components/Logo";
import { Container, Input, Button, ButtonText } from "./styles";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("@Tindev:user").then(user => {
      if (user) {
        navigation.navigate("Main", { _id: user });
      }
    });
  }, []);

  async function handleLogin() {
    const response = await api.post("/devs", { username });
    const { _id } = response.data;
    await AsyncStorage.setItem("@Tindev:user", _id);
    navigation.navigate("Main", { _id });
  }

  return (
    <Container behavior="padding" enabled={Platform.os === "ios"}>
      <Logo />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={username}
        onChangeText={e => setUsername(e)}
        placeholder="Digite o seu usuario no Github"
      />
      <Button onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </Button>
    </Container>
  );
}
