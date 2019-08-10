import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${props => props.zIndex};
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;

export const Footer = styled.View`
  background-color: #fff;
  padding: 15px 20px;
`;

export const Username = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Bio = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 5;
  line-height: 18px;
`;
