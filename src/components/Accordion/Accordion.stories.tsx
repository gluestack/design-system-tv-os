import Accordion from "./Accordion";

const AccordionMeta: any = {
  title: "stories/Accordion",
  component: Accordion,
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "unfilled"],
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    isDisabled: {
      control: "boolean",
      options: [true, false],
    },
  },
};

export default AccordionMeta;

export { Accordion };
