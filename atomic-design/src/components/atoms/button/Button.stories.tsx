import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const FunctionButton: Story = {
  args: {
    children: "Function Button",
    onClick: (e: any) => {
      e.preventDefault();
      alert("Button clicked");
    },
  },
};
