**JSX**
JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript. It is mainly used in React to define what the UI should look like.

JSX -> React.createElement -> ReactElement - JS Object -> HTML Element (render) ===> *Babel* helps in this process

Babel is a JavaScript compiler that helps convert modern JavaScript (ES6+) code into an older version that browsers can understand.

There are 2 types of components:
1.Class-based Components - Old way of writing code, used rarely in industry
2.Functional Components - New way of writing code, most commonly used

*While creating a functional component, the first letter of the name of the component must be in uppercase. Otherwise React will throw an error. A React component is a normal JavaScript function which returns a JSX/React element.*

<Title /> -> self closing component (no childern)
<Title> </Title> -> component with children
both are same 

**React Fragment**
<>
  JSX
</>

JSX - not part of React, it's individual 

