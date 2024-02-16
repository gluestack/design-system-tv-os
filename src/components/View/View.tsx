import { View, Center, Heading, Text } from "../../core-components";
import React from "react";
import Wrapper from "../Wrapper";

export default function ViewStory() {
  return (
    <Wrapper>
      <Center>
        <View p="$4">
          <Heading>
            A component library for the{" "}
            <Heading color="$emerald400">React Ecosystem</Heading>
          </Heading>
          <Text pt="$3">
            gluestack-ui is a simple, modular and accessible component library
            that gives you building blocks to build you React applications.
          </Text>
        </View>
      </Center>
    </Wrapper>
  );
}

export { View, Center, Heading, Text };
