import React from "react";
import { Center, Text } from "../../core-components";
import { Pressable } from "../../core-components/Pressable";
import Wrapper from "../Wrapper";

const PressableBasic = ({ ...props }: any) => {
  return (
    <Wrapper>
      <Pressable
        // eslint-disable-next-line no-console
        onPress={() => console.log("Hello")}
        {...props}
        sx={{ h: 100, w: 200 }}
      >
        <Center
          sx={{
            h: "100%",
            w: "100%",
            bg: "$primary500",
          }}
        >
          <Text sx={{ color: "$white" }}>PRESSABLE</Text>
        </Center>
      </Pressable>
    </Wrapper>
  );
};

PressableBasic.description =
  "This is a basic Pressable component example. Pressable components are used to show a loading state of a component or page.";

export default PressableBasic;

export { Pressable, Center };
