import * as React from 'react';

interface ShowProps {
  when: boolean | (() => boolean);
  children: React.ReactNode;
}

const ShowComponent: React.FC<ShowProps> = ({ when, children }) => {
  // Evaluate the `when` prop, whether it's a boolean or a function
  const shouldRender = typeof when === 'function' ? when() : when;

  // Render children only if the condition is met
  return shouldRender ? children : null;
};

export default ShowComponent;
