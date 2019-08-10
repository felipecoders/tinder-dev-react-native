import React from "react";

import { Container, Avatar, Footer, Username, Bio } from "./styles";

export default function Card({ zIndex, data = {} }) {
  console.log(data);
  return (
    <Container zIndex={zIndex}>
      <Avatar
        source={{
          uri: data.avatar
        }}
      />
      <Footer>
        <Username>{data.name}</Username>
        <Bio numberOfLines={3}>{data.bio}</Bio>
      </Footer>
    </Container>
  );
}
