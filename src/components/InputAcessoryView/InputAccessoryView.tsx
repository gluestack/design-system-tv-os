import {
  ScrollView,
  Button,
  ButtonText,
  Center,
  Input,
} from "../../core-components";
import { InputAccessoryView } from "../../core-components/InputAccessoryView";
import { config } from "@gluestack-ui/config";
import React, { useState } from "react";
import Wrapper from "../Wrapper";

export default function SafeAreaViewStory() {
  const inputAccessoryViewID = "uniqueID";
  const initialText = "";
  const [text, setText] = useState(initialText);
  return (
    <Wrapper>
      <Center>
        <ScrollView keyboardDismissMode="interactive">
          <Input
            style={{
              padding: 16,
              marginTop: 50,
            }}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={setText}
            value={text}
            placeholder={"Please type here…"}
          />
        </ScrollView>
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button onPress={() => setText(initialText)}>
            <ButtonText>Clear text </ButtonText>
          </Button>
        </InputAccessoryView>
      </Center>
    </Wrapper>
  );
}

export {
  VStack,
  Center,
  Heading,
  GluestackUIProvider,
  SafeAreaView,
  Text,
} from "../../core-components";

export { config };
