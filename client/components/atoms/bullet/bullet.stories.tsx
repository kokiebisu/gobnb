import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BulletProps } from './props';
import { Bullet } from './bullet.component';

export default {
  title: 'Design System/Atoms/Bullet',
  component: Bullet,
  argTypes: {
    type: {
      control: { disable: true },
    },
    characteristicType: {
      control: { disable: true },
    },
    extendsTo: {
      control: { disable: true },
    },
  },
} as Meta;

const BulletTemplate: Story<BulletProps> = (args) => <Bullet {...args} />;

export const characteristic = BulletTemplate.bind({});
characteristic.args = {
  type: 'characteristic',
};

export const amenity = BulletTemplate.bind({});
amenity.args = {
  type: 'amenity',
};
amenity.argTypes = {
  removed: {
    control: 'boolean',
  },
  amenityType: {
    control: {
      type: 'select',
      options: ['smoke', 'tv', 'kitchen', 'heating', 'entrance', 'carbon'],
    },
  },
};

export const review = BulletTemplate.bind({});
review.args = {
  type: 'score',
};
review.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const know = BulletTemplate.bind({});
know.args = {
  type: 'know',
};
know.argTypes = {
  categoryType: {
    control: {
      type: 'select',
      options: [
        'checkin',
        'checkout',
        'self',
        'children',
        'smoking',
        'pets',
        'parties',
        'cleaning',
        'distancing',
        'caution',
        'check',
      ],
    },
  },
};