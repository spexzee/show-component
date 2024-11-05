import * as React from 'react';

interface ShowProps {
  when: boolean | (() => boolean);
  children: React.ReactNode;
}

// Define ShowComponent as a function rather than a React component
function showComponent(when: boolean | (() => boolean), children: React.ReactNode) {
  // Evaluate the `when` prop, whether it's a boolean or a function
  const shouldRender = typeof when === 'function' ? when() : when;

  // Return the children only if the condition is met, otherwise return null
  return shouldRender ? children : null;
}

export default showComponent;
