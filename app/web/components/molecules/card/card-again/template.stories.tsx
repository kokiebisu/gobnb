import { Meta, Story } from '@storybook/react';
import { AgainCardTemplate, AgainCardTemplateProps } from './template';

export default {
  title: 'Molecules/Card',
  component: AgainCardTemplate,
} as Meta;

const CardStory: Story<AgainCardTemplateProps> = (args) => (
  <AgainCardTemplate {...args} />
);

export const Again = CardStory.bind({});
Again.args = {};
