import React from "react";
import { Button, ButtonText } from "../../core-components/Button";
import Wrapper from "../Wrapper";

export const ButtonBasic = (props: any) => {
  return (
    <Wrapper>
      <Button {...props}>
        <ButtonText>Hello World 22</ButtonText>
      </Button>
    </Wrapper>
  );
};

ButtonBasic.description =
  "This is a basic Button component example.  A button is a component that users can tap to trigger an action.";

export default ButtonBasic;

export { Button, ButtonText };
