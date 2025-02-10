**REACT**
React is an open source JS library which is used to create SPA (single Page Applications) and user interfaces efficiently. Developed by Facebook
A Single Page Application (SPA) is a web app that loads a single HTML page and dynamically updates the content without reloading the page when you navigate.

**CDN**
A CDN (Content Delivery Network) is a network of servers spread across different locations that helps deliver web content (like images, videos, and scripts) faster to users. Instead of loading everything from the main server, a CDN stores copies of the content on multiple servers worldwide, reducing load times and improving website performance. 🚀

We can add React into our project by injecting CDN links in it (in .html file)
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
(not prferred for production)   (generally a not recommended approach also)

*The reason not to use CDN links for React and React-DOM is that you lose control over the version you’re using, which can lead to unexpected issues or bugs in your project. Using npm/yarn lets you lock the exact version you want, making your app more stable and predictable.*

**CORS**
CORS (Cross-Origin Resource Sharing) is a security feature in web browsers that prevents one website from requesting data from another website unless it's allowed.
To overcome this, crossorigin is mentioned in the above links 

**React.development.js**
This file contains the core React library.
It provides React’s features like components, state, props, hooks, etc.
It does not handle rendering to the browser; it only provides React’s logic.

**React-dom.development.js**
This file allows React to interact with the actual browser DOM.
It provides functions like ReactDOM.createRoot() to render React components inside an HTML page.
React can work with different environments (e.g., React Native for mobile), and react-dom is specifically for web browsers.

---> CHECK "BASICS" folder for how to write react before JSX 

The costliest operation for a browser is when the browser needs to manipulate the DOM.
Any React element is nothing but a JavaScript object.
The render() function is responsible for taking the JavaScript object (React element) as an argument, converting it into an HTML tag and putting it in the DOM.

** It is recommended to put script tags at the end of the body so that the scripts wouldn’t stop the browser from parsing the HTML.

**Emmet**
Emmet is a tool that speeds up writing code by allowing us to type shortcuts (abbreviations) that expand into full code. 
EX: ! (for boilerplate HTML code)

**Library**
A library is like a set of Lego pieces. You get to choose what pieces you want to use and build whatever you want. If you want a car, you pick the pieces for wheels, body, etc., and put them together in your own way. The library gives you the pieces, but you decide what to build and how to put it together.
Library can be used in a small part of your existing application also

**Framework**
A framework is like a Lego kit with instructions. It provides you with a set of pieces and guides you step-by-step on how to build a specific structure, like a spaceship. You can still add your own creative touch, but you're following the general framework or blueprint provided. The framework tells you the structure and how things fit together.

=> Summary <=
Library: You choose the pieces and build your own thing. (You have control.)
Framework: You follow the guide provided by the framework to build something specific. (It has control over the structure.)

**React Name** 
React was named to emphasize its ability to react to changes in the data and efficiently update the UI.

**Real DOM**
The Real DOM is the actual structure of the webpage. It’s a representation of the entire HTML document that the browser uses to render content. When you change something on a webpage, the entire DOM must be updated. This process can be slow and inefficient, especially for complex applications.

**Virtual DOM**
The Virtual DOM is like a lightweight copy of the Real DOM. It’s a virtual version of the entire UI, created by JavaScript. When there’s a change in the app (like user input or new data), React first updates the Virtual DOM. After that, React compares the Virtual DOM with the Real DOM (using a process called "diffing") and only applies the minimal changes to the Real DOM. This makes updates faster and more efficient.

=> Summary <=
Real DOM: Updates the entire UI whenever there’s a change (slow).
Virtual DOM: Updates only the parts of the UI that need to change (fast).

**async & defer**
<!-- <script async/defer src="script.js"></script> -->
For better understanding see the image -> async_defer.jpeg







