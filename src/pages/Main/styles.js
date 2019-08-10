import styled from "styled-components/native";
import Logomarca from "../../components/Logo";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Logomarca)`
  margin-top: 30px;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity.attrs({
  elevation: 2,
  shadowColor: "#000",
  shadowOpacity: 1,
  shadowRadius: 2,
  shadowOffset: {
    width: 0,
    height: 2
  }
})`
  width: 50px;
  height: 50px;
  border-radius: 25;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

export const ButtonIcon = styled.Image``;

export const EmptyText = styled.Text`
  align-self: center;
  color: #999;
  font-size: 24px;
  font-weight: bold;
`;
