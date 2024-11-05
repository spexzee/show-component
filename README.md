# Show Component

The `show-component` is a React utility that conditionally renders its children based on a boolean value or a function that returns a boolean. This component helps simplify conditional rendering in your React applications.

## Installation

You can install the `show-component` via npm. Make sure you have Node.js installed on your system.

```bash
npm install show-component
```

## Usage

### For JavaScript

To use the `ShowComponent` in a JavaScript project, import it into your React component file. Here's an example:

```javascript
import React, { useState } from 'react';
import { ShowComponent } from 'show-component'; // Import the ShowComponent

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <h1>Using ShowComponent</h1>
      <button onClick={toggleVisibility}>
        Toggle Visibility
      </button>
      
      <ShowComponent when={isVisible}>
        <p>This content is conditionally rendered!</p>
      </ShowComponent>

      <ShowComponent when={() => isVisible && new Date().getSeconds() % 2 === 0}>
        <p>This content is shown based on a function!</p>
      </ShowComponent>
    </div>
  );
};

export default App;
```

### For TypeScript

Using the `ShowComponent` in a TypeScript project is similar. Here’s an example:

```typescript
import React, { useState } from 'react';
import { ShowComponent } from 'show-component'; // Import the ShowComponent

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <h1>Using ShowComponent</h1>
      <button onClick={toggleVisibility}>
        Toggle Visibility
      </button>
      
      <ShowComponent when={isVisible}>
        <p>This content is conditionally rendered!</p>
      </ShowComponent>

      <ShowComponent when={() => isVisible && new Date().getSeconds() % 2 === 0}>
        <p>This content is shown based on a function!</p>
      </ShowComponent>
    </div>
  );
};

export default App;
```

### Props

The `ShowComponent` accepts the following props:

- **`when`**: `boolean | (() => boolean)`  
  Determines whether the children should be rendered. This can be a boolean value or a function that returns a boolean.

- **`children`**: `React.ReactNode`  
  The content to be conditionally rendered. This can be any valid React node.


