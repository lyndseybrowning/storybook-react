import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

function loadStories() {
  const req = require.context('../stories', true, /.js$/);

  req.keys().forEach(req);
}

// addon-info
setDefaults({
  inline: true,
});

configure(loadStories, module);
