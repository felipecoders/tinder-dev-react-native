import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../../services/api";

import Card from "../../components/Card";
import {
  Container,
  CardsContainer,
  ButtonContainer,
  Logo,
  Button,
  ButtonIcon,
  EmptyText
} from "./styles";

import Like from "../../assets/like.png";
import Dislike from "../../assets/dislike.png";

export default function Main({ navigation }) {
  const id = navigation.getParam("_id");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get("/devs", {
        headers: {
          user: id
        }
      });
      setUsers(data);
    }
    loadUsers();
  }, [id]);

  async function handleDislike() {
    try {
      const [user, ...rest] = users;
      await api.post(`/devs/${user._id}/dislikes`, null, {
        headers: {
          user: id
        }
      });
      setUsers(rest);
    } catch (e) {
      console.error(e);
    }
  }

  async function handleLike() {
    try {
      const [user, ...rest] = users;
      await api.post(`/devs/${user._id}/likes`, null, {
        headers: {
          user: id
        }
      });
      setUsers(rest);
    } catch (e) {
      console.error(e);
    }
  }

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate("Login");
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleLogout}>
        <Logo />
      </TouchableOpacity>

      <CardsContainer>
        {users.length === 0 ? (
          <EmptyText>Acabou :(</EmptyText>
        ) : (
          users.map((user, i) => (
            <Card zIndex={users.length - i} data={user} key={user._id} />
          ))
        )}
      </CardsContainer>

      {users.length > 0 && (
        <ButtonContainer>
          <Button onPress={handleDislike}>
            <ButtonIcon source={Dislike} />
          </Button>
          <Button onPress={handleLike}>
            <ButtonIcon source={Like} />
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
}
