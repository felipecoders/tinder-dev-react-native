import React from "react";

import Itsamatch from "../../assets/itsamatch.png";
import {
  Container,
  Logo,
  Avatar,
  Username,
  Bio,
  Button,
  ButtonText
} from "./styles";

export default function MatchUser({ data, onClose }) {
  return (
    <Container>
      <Logo source={Itsamatch} />
      <Avatar source={{ uri: data.avatar }} />
      <Username>{data.name}</Username>
      <Bio>{data.bio}</Bio>
      <Button onPress={onClose}>
        <ButtonText>FECHAR</ButtonText>
      </Button>
    </Container>
  );
}
