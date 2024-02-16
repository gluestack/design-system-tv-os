import { Box } from "../../core-components";
import React from "react";
import Wrapper from "../Wrapper";

const BoxWithRef = ({ ...props }: any) => {
  const myRef = React.useRef<any>({});
  React.useEffect(() => {
    const styleObj = {
      borderWidth: 8,
      borderRadius: 4,
      borderColor: "#22D3EE",
    };

    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);

  return (
    <Wrapper>
      <Box {...props} sx={{ h: 100, w: 100, bg: "$red500" }} ref={myRef} />;
    </Wrapper>
  );
};

BoxWithRef.description =
  "This is a basic Box component example with styling using ref. Box is a primitive component.";

export default BoxWithRef;
