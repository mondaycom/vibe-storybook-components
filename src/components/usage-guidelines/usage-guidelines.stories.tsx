import type { Meta, StoryObj } from '@storybook/react';
import UsageGuidelines from './usage-guidelines';

const meta: Meta<typeof UsageGuidelines> = {
  component: UsageGuidelines,
  title: 'Components/UsageGuidelines',
};

export default meta;

type Story = StoryObj<typeof UsageGuidelines>;

export const Overview: Story = {
  args: {
    guidelines: [
      'There is no unique syntax for creating a UsageGuideline component in MDX files. Therefore, use the component as you would in a regular JSX file.',
      'Write down between three and five guidelines (technical or “copy”).',
    ],
  },
};
