**HIGHER ORDER COMPONENTS**

It is a function that takes a component as an input and returns a new component with enhanced or modified behavior.

input -> RestaurantCard
output -> PromotedRestaurantCard

Ex:

export const RestaurantCardsPromoted = (RestaurantCards) =>{
    return () =>{
        return(
            <JSX>
        )
    }
}

In any React application we have 
UI Layer
Data Layer

It's important to know how to manage data layer

NOTE : 

user?.age?.@email - wrong
user?.age?.["@email"] - Correct


Install React Developer Tools - in the inspect, two things will add
Components - we can see UI layer on left and data layer on right
Profiler - records our action


**Controlled Component** When we say the parent controls the child, it means the parent component manages the value (or state) of the child component. The parent typically passes down values to the child via props and handles updates to that value. In this case, the child is "controlled" because its behavior (like input value) is driven by the parent.

**Uncontrolled Component** On the other hand, if the child component manages its own state (like the value of an input field), and the parent doesn't directly control it, the child can be considered "uncontrolled." The child isn't being actively managed by the parent, and it keeps its own state internally.

**Lifting the state up** in React simply means moving the state from a child component to a parent component.

In simpler terms:

If you have two child components that need to share or use the same state, you can "lift" that state up to their common parent component. This way, the parent can manage the state, and pass it down to the children as props

**PROP DRILLING**

In React, the data flows in one direction: from parent to child components.

So if you want to send data from a parent component to a grandchild component (skipping the direct connection between the parent and the grandchild), you would do it in two steps:

Send data from the parent to the child via props.
Pass the data from the child to the grandchild via props again.

It becomes a huge problem when we have deeply nested components. To avoid prop drilling, we can use **CONTEXT**. Context allows us to store data in a central place, so we don't need to pass it through multiple levels of nested components.

**CONTEXT**
To create a context, use createContext() (imported from React).
To access and use the context, use useContext().

We need to be mindful of where to use context. It’s most useful when the data needs to be shared in multiple places, or when we need to pass data from a parent to a great-grandchild like this scenarios.

However, don't neglect props. They are still very handy in many cases.

In class based components ->
<userContext.Consumer>
    {(centralData)=> <h1 className="font-bold">{centralData.loggedInUser}</h1>}
</userContext.Consumer>


**Provider**
What it does: The Provider is a component that makes the data available to all the components that need it.

It "provides" the data to its child components.

It is used at a higher level in the component tree, and any component below it (inside the tree) can access the data.

In simple terms: The Provider is like a "data source" that holds the value and shares it with its child components.

<userContext.Provider value={ {loggedInUser: userName}}>
    <div>
        <Header />
        <Outlet />
    </div>
</userContext.Provider>

**Consumer**
What it does: The Consumer is a component that allows you to access the data provided by the Provider.

It "consumes" the data provided by the Provider and uses it inside the component.

In simple terms: The Consumer is like a "data receiver" that takes the data and uses it inside the component where it is needed.



