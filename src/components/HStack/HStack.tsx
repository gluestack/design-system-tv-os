import React from "react";
import { HStack } from "../../core-components/HStack";
import { Box } from "../../core-components";
import Wrapper from "../Wrapper";

const HStackBasic = ({ space, reversed, ...props }: any) => {
  return (
    <Wrapper>
      <HStack space={space} mt="$5" reversed={reversed} {...props}>
        <Box sx={{ w: 100, h: 100, bg: "$primary300" }} />
        <Box sx={{ w: 100, h: 100, bg: "$primary400" }} />
        <Box sx={{ w: 100, h: 100, bg: "$primary500" }} />
        <Box sx={{ w: 100, h: 100, bg: "$primary600" }} />
      </HStack>
    </Wrapper>
  );
};

HStackBasic.description =
  "This is a basic HStack component example. HStack is a primitive component.";

export default HStackBasic;

export { Box, HStack };
