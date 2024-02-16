import React from "react";
import { Center } from "../../core-components";
import { Text } from "../../core-components";
import Wrapper from "../Wrapper";

const TextBasic = ({
  size = "md",
  text = "Hello world",
  fontWeight = "bold",
  ...props
}: any) => {
  return (
    <Wrapper>
      <Text size={size} {...props} fontWeight={`$${fontWeight}`}>
        {text}
      </Text>
    </Wrapper>
  );
};

TextBasic.description =
  "This is a basic Text component example. Texts are used to show the content of a section or page.";

export default TextBasic;

export { Text, Center };
