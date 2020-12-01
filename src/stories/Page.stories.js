import React from 'react';

import { Page } from './Page';

import * as ButtonStories from './Button.stories';
import * as LadyStories from './Lady.stories';

export default {
  title: 'Example/App',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const App = Template.bind({});
App.args = {
  ...ButtonStories.buttonIsArrow.args,
  ...LadyStories.isSara.args,
};
