import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';

storiesOf('Buttons', module)
  .add('Default', () => (
    <Button>Button Text</Button>
  ))
  .add('Download', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
