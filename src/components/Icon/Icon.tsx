import React from "react";
import { AddIcon } from "../../core-components/Icon";
import Wrapper from "../Wrapper";
const IconBasic = ({ size, ...props }: any) => {
  return (
    <Wrapper>
      <AddIcon size={size} {...props} />;
    </Wrapper>
  );
};

IconBasic.description =
  "This is a basic Icon component example. Icons are used to communicate a state that affects a system, feature or page";

export default IconBasic;
