import { Text } from "../../core-components/Text";
import { Center } from "../../core-components/Center";
import React from "react";
import Wrapper from "../Wrapper";

const CenterBasic = () => {
  return (
    <Wrapper>
      <Center bg="$primary500" h={200} w={300}>
        <Text color="white" fontWeight="$bold">
          This is the center.
        </Text>
      </Center>
    </Wrapper>
  );
};

CenterBasic.description =
  "This is a basic Center component example. A center is a layout component that centers its children.";

export default CenterBasic;

export { Text, Center };
