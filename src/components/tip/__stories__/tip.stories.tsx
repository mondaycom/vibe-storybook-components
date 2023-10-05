import type { Meta, StoryObj } from '@storybook/react';
import Tip from '../tip';
import Flex from '../../../helpers/components/Flex/Flex';

const meta: Meta<typeof Tip> = {
  component: Tip,
  title: 'Components/Tip',
};
export default meta;

type Story = StoryObj<typeof Tip>;

export const Overview: Story = {
  args: {
    children: 'This tip shows some helpful information.',
  },
};

export const Emoji: Story = {
  args: {
    title: 'Completed',
    children: 'This tip shows some helpful information.',
    emoji: '✅',
  },
};

export const Types: Story = {
  render: () => (
    <Flex gap={Flex.gaps?.SMALL} direction={Flex.directions?.COLUMN} align={Flex.align?.START}>
      <Tip type={Tip.types?.PRIMARY}>This is a primary tip.</Tip>
      <Tip type={Tip.types?.SUCCESS}>This is a success tip.</Tip>
      <Tip type={Tip.types?.WARNING}>This is a warning tip.</Tip>
      <Tip type={Tip.types?.DANGER}>This is a danger tip.</Tip>
      <Tip type={Tip.types?.DARK}>This is a dark tip.</Tip>
    </Flex>
  ),
};
