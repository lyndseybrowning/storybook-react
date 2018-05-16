import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../stories', true, /.js$/);

  req.keys().forEach(req);
}

configure(loadStories, module);
