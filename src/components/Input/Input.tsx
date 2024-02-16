import React from "react";
import {
  Button,
  ButtonText,
  Box,
  Heading,
  Icon,
  SearchIcon,
  FormControl,
} from "../../core-components";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "../../core-components/Input";
import { Center } from "../../core-components/Center";
import { VStack } from "../../core-components/VStack";
import { Text } from "../../core-components/Text";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useState } from "react";
import Wrapper from "../Wrapper";

const InputBasic = ({ ...props }: any) => {
  const [value, setValue] = React.useState("");

  return (
    <Wrapper>
      <Input {...props}>
        <InputField
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputSlot pr={props.variant === "underlined" ? "$0" : "$4"}>
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>
    </Wrapper>
  );
};

InputBasic.description =
  "This is a basic Input component example. Inputs are used to capture data from users.";

export default InputBasic;

export {
  Input,
  InputField,
  InputIcon,
  Center,
  Button,
  ButtonText,
  Box,
  VStack,
  Text,
  Heading,
  useState,
  Icon,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  InputSlot,
};
