import VStack from "./VStack";
// import VStackReversedExample from './VStackReversed';

const VStackMeta: any = {
  title: "stories/VStack",
  component: VStack,
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

export default VStackMeta;

export { VStack };
// export { VStackReversedExample };
