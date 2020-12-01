import React from 'react';

import { Button } from './Button';

// I commented this to make it easier for non-developer users

// export default {
//   title: 'Example/Button',
//   component: Button,
// };

const Template = (args) => <Button {...args} />;

export const buttonIsArrow = Template.bind({});
buttonIsArrow.args = {
  buttonIsArrow: true,
};

