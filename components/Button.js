import React from 'react';
import '../sass/components/_button.scss';

const Button = (props) => {
  return (
    <button class="c-button">{props.children}</button>
  );
};

export default Button;
