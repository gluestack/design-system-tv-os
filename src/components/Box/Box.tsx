import { Text } from "../../core-components/Text";
import { Box } from "../../core-components/Box";
import React from "react";
import Wrapper from "../Wrapper";

const BoxBasic: any = ({
  bg = "blue500",
  w = "100",
  h = "100",
  className = "",
  ...props
}: any) => {
  return (
    <Wrapper>
      <Box
        {...props}
        bg={`$${bg}`}
        h={h}
        w={w}
        justifyContent="center"
        alignItems="center"
        className={className}
      >
        <Text color="white" fontWeight="$bold">
          BOX
        </Text>
      </Box>
    </Wrapper>
  );
};

BoxBasic.description = "This is a basic Box component example.";

export default BoxBasic;

export { Text, Box };
