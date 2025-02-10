
// ......................    BEFORE JSX ...................................

// const Heading = React.createElement(
//   "h1",
//   { id: "heading", className: "hone" }, // ✅ Use className instead of class
//   "Hello World"
// );

// FOR NESTED ELEMENTS
const Container = React.createElement(
  "div",
  { id: "parent", className: "main" }, // ✅ Use className instead of class
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Andavarapu"),
    React.createElement("h3", {}, "Uma Venkatesh"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(Heading); // ✅ Render without JSX
root.render(Container);
