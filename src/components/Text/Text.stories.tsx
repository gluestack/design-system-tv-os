import Text from "./Text";
// import TextSizes from './TextSizes';

const TextMeta: any = {
  title: "stories/Text",
  component: Text,

  argTypes: {
    size: {
      control: "select",
      options: [
        "2xs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
      ],
    },
    fontWeight: {
      control: "select",
      options: [
        "hairline",
        "thin",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extrabold",
        "black",
      ],
    },
  },
  args: {
    text: "Hello world",
    size: "md",
    fontWeight: "medium",
  },
};

export default TextMeta;

export { Text };
// export { TextSizes };
