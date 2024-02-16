import { HStack } from "../../core-components";
import { Box } from "../../core-components";
import React from "react";
import Wrapper from "../Wrapper";

const HStackReversed = ({ space, ...props }: any) => {
  return (
    <Wrapper>
      <HStack space={space} mt="$5" {...props} reversed>
        <Box sx={{ w: 100, h: 100, bg: "$primary300" }} />
        <Box sx={{ w: 100, h: 100, bg: "$primary400" }} />
        <Box sx={{ w: 100, h: 100, bg: "$primary500" }} />
        <Box sx={{ w: 100, h: 100, bg: "$primary600" }} />
      </HStack>
    </Wrapper>
  );
};

HStackReversed.description =
  "This is a basic HStack component example. HStack is a primitive component to layout its children horizontally.";

export default HStackReversed;
