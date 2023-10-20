import type { Meta, StoryObj } from '@storybook/react';
import TokenTable from '../token-table';

const meta: Meta<typeof TokenTable> = {
  component: TokenTable,
  title: 'Components/TokenTable',
};
export default meta;

type Story = StoryObj<typeof TokenTable>;

export const Overview: Story = {
  args: {
    theadData: ['Column A', 'Column B'],
    tbodyData: [
      { id: '1', items: ['value 1', 'value 3'] },
      { id: '2', items: ['value 2', 'value 4'] },
    ],
  },
};
