import React from "react";

import {
  Input,
  VStack,
  Icon,
  SearchIcon,
  InputIcon,
  InputSlot,
  InputField,
} from "../../core-components";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import Wrapper from "../Wrapper";

const InputWithIcon = ({ ...props }: any) => {
  const [value, setValue] = React.useState("");

  return (
    <Wrapper>
      <VStack space="md" w="$full">
        <Input {...props} size="sm">
          <InputField
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <InputSlot pr="$4">
            <InputIcon as={SearchIcon} />
          </InputSlot>
        </Input>

        <Input {...props} size="md">
          <InputField
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <InputSlot pr="$4">
            <InputIcon as={SearchIcon} />
          </InputSlot>
        </Input>

        <Input {...props} size="lg" isDisabled>
          <InputField
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <InputSlot pr="$4">
            <InputIcon as={SearchIcon} />
          </InputSlot>
        </Input>

        <Input {...props} size="xl" isInvalid>
          <InputField
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <InputSlot pr="$4">
            <InputIcon as={SearchIcon} />
          </InputSlot>
        </Input>
      </VStack>
    </Wrapper>
  );
};

InputWithIcon.description =
  "This is an example of Input component with icon. Inputs are used to capture data from users.";

export default InputWithIcon;

export { Input, VStack, Icon, SearchIcon, EyeIcon, EyeOffIcon };
