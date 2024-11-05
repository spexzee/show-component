# Show Component

The `show-component` is a React utility function that conditionally renders its children based on a boolean value or a function that returns a boolean. This utility simplifies conditional rendering in your React applications.

## Installation

You can install `show-component` via npm. Make sure you have Node.js installed on your system.

```bash
npm install show-component
```

## Usage

The `show-component` utility exports a function called `showComponent`, which you can use to conditionally render elements within your components.

### For JavaScript

To use `showComponent` in a JavaScript project, import it into your React component file. Here’s an example:

```javascript
import React, { useState } from 'react';
import showComponent from 'show-component'; // Import the showComponent function

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <h1>Using showComponent</h1>
      <button onClick={toggleVisibility}>Toggle Visibility</button>

      {showComponent(isVisible, <p>This content is conditionally rendered!</p>)}

      {showComponent(() => isVisible && new Date().getSeconds() % 2 === 0, (
        <p>This content is shown based on a function!</p>
      ))}
    </div>
  );
};

export default App;
```

### For TypeScript

Using `showComponent` in a TypeScript project is similar. Here’s an example:

```typescript
import React, { useState } from 'react';
import showComponent from 'show-component'; // Import the showComponent function

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <h1>Using showComponent</h1>
      <button onClick={toggleVisibility}>Toggle Visibility</button>

      {showComponent(isVisible, <p>This content is conditionally rendered!</p>)}

      {showComponent(() => isVisible && new Date().getSeconds() % 2 === 0, (
        <p>This content is shown based on a function!</p>
      ))}
    </div>
  );
};

export default App;
```

### Parameters

The `showComponent` function accepts the following parameters:

- **`when`**: `boolean | (() => boolean)`  
  A boolean value or a function that returns a boolean, determining whether the content should be rendered.

- **`children`**: `React.ReactNode`  
  The content to be conditionally rendered, which can be any valid React node.