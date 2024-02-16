import React from "react";
import { Center } from "../../core-components";
import { Heading } from "../../core-components/Heading";
import Wrapper from "../Wrapper";

const HeadingBasic = ({ text = "I'm the heading", ...props }) => {
  return (
    <Wrapper>
      <Heading {...props}>{text}</Heading>;
    </Wrapper>
  );
};

HeadingBasic.description =
  "This is a basic Heading component example. Headings are used to show the title of a section or page.";

export default HeadingBasic;

export { Center, Heading };
