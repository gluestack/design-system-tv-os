import HStack from "./HStack";
import HStackReversed from "./HStackReversed";

const HStackMeta: any = {
  title: "stories/HStack",
  component: HStack,
  argTypes: {
    space: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    reversed: {
      control: "boolean",
    },
  },
  args: {
    space: "md",
    reversed: false,
  },
};

export default HStackMeta;

export { HStack };

export { HStackReversed };
