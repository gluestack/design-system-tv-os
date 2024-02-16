import React from "react";

import { HStack, Text, VStack } from "../../core-components";
import { Spinner } from "../../core-components/Spinner";
import Wrapper from "../Wrapper";

const SpinnerBasic = ({ ...props }) => (
  <Wrapper>
    <Spinner {...props} />;
  </Wrapper>
);

SpinnerBasic.description =
  "This is a basic Spinner component example. Spinners are used to show a loading state of a component or page.";

export default SpinnerBasic;

export { Spinner, HStack, Text, VStack };
