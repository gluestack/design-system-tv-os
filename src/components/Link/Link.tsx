import React from "react";

import { Icon, HStack, Text } from "../../core-components";
import { Link, LinkText } from "../../core-components/Link";
import { ArrowUpRightIcon } from "lucide-react-native";
import Wrapper from "../Wrapper";

const LinkBasic = ({ ...props }: any) => {
  return (
    <Wrapper>
      <Link href="https://google.com" isExternal {...props}>
        <LinkText
        // @ts-ignore
        >
          GLUESTACK
        </LinkText>
      </Link>
    </Wrapper>
  );
};

LinkBasic.description =
  "This is a basic Link component example.  A link is a component that users can tap to navigate to a new page.";

export default LinkBasic;

export { Link, LinkText, ArrowUpRightIcon, Icon, HStack, Text };
