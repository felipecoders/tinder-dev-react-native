import React from "react";
import { Image } from "react-native";

import logo from "../../assets/logo.png";

export default function Logo(props) {
  return <Image source={logo} {...props} />;
}
