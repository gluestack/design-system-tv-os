import React from "react";
import { VStack, Text, HStack } from "../../core-components";
import { Switch } from "../../core-components";
import Wrapper from "../Wrapper";

const SwitchBasic = ({ ...props }: any) => {
  return (
    <Wrapper>
      <Switch defaultValue={true} value={props.isEnabled} {...props} />;
    </Wrapper>
  );
};

SwitchBasic.description =
  "This is a basic Switch component example. Switches are used to toggle between two states.";

export default SwitchBasic;

export { Switch, VStack, Text, HStack };
