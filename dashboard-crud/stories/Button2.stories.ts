import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui/button";

const meta = {
  title: "App/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className:
      "text-white h-[43px] px-6 rounded-[3px] font-bold text-[20px] cursor-pointer",
    children: "Create QR Code",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    className:
      "text-primary hover:text-primary hover:bg-primary/10 h-[43px] px-6 rounded-[3px] border-primary font-bold text-[20px] cursor-pointer",
    children: "New Folder",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    className: "rounded-[3px] bg-secondary",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    className: "text-xs rounded-[3px]",
    children: "Button",
  },
};
