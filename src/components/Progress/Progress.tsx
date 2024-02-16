import React from "react";

import { VStack, Text, Box, Heading, Center } from "../../core-components";

import { Progress, ProgressFilledTrack } from "../../core-components/Progress";
import Wrapper from "../Wrapper";

const ProgressBasic = ({ value = 50, ...props }: any) => {
  return (
    <Wrapper>
      <Center>
        <Progress
          // sx={{
          //   w: 300,
          //   _web: {
          //     w: 800,
          //   },
          // }}
          style={{
            width: 800,
          }}
          value={value}
          {...props}
        >
          <ProgressFilledTrack />
        </Progress>
      </Center>
    </Wrapper>
  );
};

ProgressBasic.description =
  "This is a basic Progress component example. Progress components are used to show the progress of a task.";

export default ProgressBasic;

export { Progress, ProgressFilledTrack, VStack, Text, Box, Heading };
