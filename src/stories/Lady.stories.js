import React from 'react';

import { Lady } from './Lady';

// I commented this to make it easier for non-developer users

// export default {
//   title: 'Example/Lady',
//   component: Lady,
// };

const Template = (args) => <Lady {...args} />;

export const isSara = Template.bind({});
isSara.args = {
  isSara: true,
};
