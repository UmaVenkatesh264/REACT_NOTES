SINGLE RESPONSIBILITY PRINCIPLE:

Always try to break your code into small, focused pieces, where each piece has a single responsibility.
This makes the code more reusable, manageable, and testable.


**CUSTOM HOOKS**
preferred - create a separate file for each custom hook and the naming convention is "useCustomHook.js"

NOTE : to experience offline experience in the browser you don't need to turn off the internet, just go to inspect -> network -> chehck the dropdown where "No Throttling" is there

=> A bundler (e.g., Parcel, Webpack) combines all project files into optimized JavaScript bundles. It compresses, minifies, and optimizes the code for better performance.

However, for large applications, bundling everything into a single JS file can slow down initial loading. Instead, we use code splitting to create multiple smaller bundles, ensuring faster loading times and better performance.

**Chunking / Code Splitting / Dynamic Bundling / On Demand Loading / Dynamic Import / Lazy Loading (preffered)**

For example, in our food app, there is an inbuilt grocery app (like Swiggy and Instamart). If we use lazy loading, the grocery app will not load initially when the app starts. It will only load when the user visits the grocery section.

steps:

import {lazy, Suspense } from "react";  -> Suspense is a component

const Grocery = lazy (()=>{
  import ("./components/Grocery")
})

{
  path: "/grocery",
  element: <Suspense fallback={<h1>LOADING ...</h1>}><Grocery/></Suspense>
}
