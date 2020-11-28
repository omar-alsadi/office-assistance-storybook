import React from 'react';

import { Page } from './Page';

import * as ButtonStories from './Button.stories';
import * as LadyStories from './Lady.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Office = Template.bind({});
Office.args = {
  ...ButtonStories.buttonIsArrow.args,
  ...LadyStories.isSara.args,
};
