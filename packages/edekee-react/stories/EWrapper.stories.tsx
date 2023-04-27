import type {Meta, StoryObj} from '@storybook/react';

import {EWrapper} from '../lib';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/EWrapper',
  component: EWrapper,
  tags: ['autodocs'],
} satisfies Meta<typeof EWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    isPaused: true,
    show: false
  },
  render: () => {
    return (
        <EWrapper onClick={(e) => e.showTag()} onShowTags={(ev) => console.log(ev)}>
          <div slot="video-player">
            <video poster="https://samplelib.com/lib/preview/mp4/sample-5s.jpg"/>
          </div>
        </EWrapper>

    )
  }
};




