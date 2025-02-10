The first and most important thing we have to do before creating any frontend web application is **Planning**
You have to be aware of what you are going to build
You have to draw the outline of the webpage on a paper 

<React.StrictMode> - Enables extra checks in development (not in production).
    <App />
</React.StrictMode>

If we use one component inside another component then it's called *component composition*

*NOT PREFERRED*
whenever you give inline style in JSX, give it as a JS Object

const styleCard = {
  backgroundColor: "blue"
}

<div className="main" style={styleCard}> 
</div>

OR

<div className="main" style={{backgroundColor:"blue"}}> 
</div>

In JSX (React inline styles), we use camelCase (backgroundColor), while in CSS we use kebab-case (background-color).


**PROPS**
React Component is a JS function at the EOD
Props is nothing but passing arguments to a function - remember like this

when we console the props, we will get a JS object in the console

**When you have to pass the data dynamically to a component, you pass it as a PROP**


**CONFIG DRIVEN UI**
Config-Driven UI is an approach where the structure, layout, and behavior of a user interface (UI) are controlled by external configuration files (like JSON or YAML), rather than hardcoding the UI directly in the application code.

EX: The Layout and resturants of Swiggy UI will be different for different cities

If you want to do any operation in JSX , you have to do it inside {}

** Whenever we use MAP method, we always have to give key **
When elements in a list change (e.g., items are added, removed, or reordered), React uses the key to identify which items have changed. This helps React minimize re-renders and only update the necessary parts of the DOM. If we didn't mention key then it will rerender enirely every time

React tells us don't use "index" as keys - it works but not recommended

unique id >>> index >>> not using key(not acceptable)