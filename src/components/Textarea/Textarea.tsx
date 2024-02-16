import React from "react";
import {
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlLabel,
  FormControlLabelText,
} from "../../core-components";

import { Textarea, TextareaInput } from "../../core-components";
import Wrapper from "../Wrapper";

const TextareaBasic = ({ ...props }: any) => {
  return (
    <Wrapper>
      <Textarea {...props} mx="$2">
        <TextareaInput placeholder="Your text goes here..." />
      </Textarea>
    </Wrapper>
  );
};

TextareaBasic.description =
  "This is a basic Textarea component example. Textareas are used to get multiline input from the user.";

export default TextareaBasic;

export {
  Textarea,
  TextareaInput,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlLabel,
  FormControlLabelText,
};
