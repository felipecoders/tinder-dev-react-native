import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 60px;
  width: 248px;
`;

export const Avatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 5px;
  border-color: #fff;
  margin: 30px 0;
`;

export const Username = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;

export const Bio = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 24px;
  text-align: center;
  padding: 0 30px;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-top: 30px;
  font-weight: bold;
`;
