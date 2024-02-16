import Box from "./Box";
import BoxWithRef from "./BoxWithRef";

const BoxMeta: any = {
  title: "stories/Box",
  component: Box,

  args: {
    w: 100,
    h: 100,
  },
};

export default BoxMeta;

export { Box, BoxWithRef };
