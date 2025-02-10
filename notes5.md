*POINTS TO REMEMBER*
Try to name the file same as the name of the component

.js and .jsx - can use anything

In import statements, with extension / without extension anything is fine 

Never keep your hardcoded data inside components folder

Always use first letter capital for component names and file names

As a developer, our aim is to keep sync between UI layer and data layer - React helps us with this

**EXPORTS**
Default Export - In one file you can export only one thing
=> export default Header;
Named Export - In one file if you have to export multiple things 
   export const Header = () =>{}
   export const STRING_HEADING = ""

**IMPORTS**
Default Import -> import XYZ from "path"
Named Import -> import {} from "path"

**HOOK**
a normal JS utility functions which comes with some super powers
useState() - super powerful state variables
useEffect()

import {useState} from "path"
const [ xyz, setXyz] = useState();    -> Array Destructuring 

const arr = useState();
<!--  const [ xyz, setXyz] = arr; -->
const xyz = arr[0];
const setXyz = arr[1];

*whenever a state variable updates, React rerenders the component*

=> React is very good at DOM manipulation

*Reconciliation* 
The Reconciliation Algorithm in React refers to the process by which React updates the user interface when the state or props of a component change. 
Before React Fiber, this process was synchronous, meaning React would perform all the updates and comparisons in one go, potentially leading to performance issues, especially with large or complex apps.

*Diffing* 
The algorithm used to compare the old and new virtual DOM to find the differences (part of reconciliation).

*React Fiber* (from React 16)
React Fiber is a complete rewrite of the React reconciliation algorithm
A new architecture that allows React to perform reconciliation asynchronously, prioritize updates, and manage updates in smaller chunks, leading to improved performance.

