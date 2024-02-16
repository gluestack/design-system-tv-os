import Select from "./Select";

const SelectMeta: any = {
  title: "stories/Select",
  component: Select,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Select offers a dynamic and user-friendly way to present a list of options in a closed view, with the ability to expand and select items from a dropdown list.`,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: ["outline", "underlined", "rounded"],
    },
    isInvalid: {
      control: "boolean",
      options: [true, false],
    },
    isHovered: {
      control: "boolean",
      options: [true, false],
    },
    isFocused: {
      control: "boolean",
      options: [true, false],
    },
    isDisabled: {
      control: "boolean",
      options: [true, false],
    },
  },
  args: {
    size: "md",
    isDisabled: false,
    isInvalid: false,
    isHovered: false,
    isFocused: false,
    variant: "outline",
  },
};

export default SelectMeta;

export { Select };
