import Modal from "./Modal";

const ModalMeta: any = {
  title: "stories/Modal",
  component: Modal,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `A Modal is a window on top of the primary content to draw the user's attention to important information or actions. It provides a focused and interruptive way to interact with the application.`,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "full"],
      description: "The width of modal.",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    showModal: {
      control: "boolean",
      option: [true, false],
    },
  },
  args: { size: "md" },
};

export default ModalMeta;

export { Modal };
