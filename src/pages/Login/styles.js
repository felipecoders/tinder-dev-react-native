import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  height: 46px;
  align-self: stretch;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 15px;
  padding: 0 15px;
`;

export const Button = styled.TouchableOpacity`
  height: 46px;
  align-self: stretch;
  background-color: #df4723;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
