import React from "react";
import {
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  VStack,
  Icon,
} from "../../core-components";

import { Alert, AlertIcon, AlertText } from "../../core-components";
import Wrapper from "../Wrapper";

const AlertBasic = ({ ...props }: any) => {
  return (
    <Wrapper>
      <Alert {...props} gap="$3">
        <AlertIcon as={InfoIcon} />
        <AlertText>Selection successfully moved!</AlertText>
      </Alert>
    </Wrapper>
  );
};

AlertBasic.description =
  "This is a basic Alert component example. Alerts are used to communicate a state that affects a system, feature or page";

export default AlertBasic;

export {
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  Icon,
  VStack,
};
