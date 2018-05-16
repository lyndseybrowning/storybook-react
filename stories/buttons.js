import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../components/Button';

const stories = storiesOf('Buttons', module)

stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.add('Testing', () => (<Button>Hello world</Button>))
