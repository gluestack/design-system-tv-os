import React from "react";

import { Box } from "../../core-components";
import { VStack } from "../../core-components";
import Wrapper from "../Wrapper";

const VStackBasic = ({ space, reversed, ...props }: any) => {
  return (
    <Wrapper>
      <VStack
        space={space}
        //@ts-ignore
        sx={{ justifyContent: "center", alignItems: "center" }}
        reversed={reversed}
        {...props}
      >
        <Box sx={{ w: 100, h: 100, rounded: "$sm", bg: "$primary300" }} />
        <Box sx={{ w: 100, h: 100, rounded: "$sm", bg: "$primary400" }} />
        <Box sx={{ w: 100, h: 100, rounded: "$sm", bg: "$primary500" }} />
        <Box sx={{ w: 100, h: 100, rounded: "$sm", bg: "$primary600" }} />
      </VStack>
    </Wrapper>
  );
};

VStackBasic.description =
  "This is a basic VStack component example. VStack is a primitive component to layout its children vertically.";

export default VStackBasic;
