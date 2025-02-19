**REDUX**
A JS library for predictable and maintainable global state management
Redux is not mandatory, if you are building small application
Redux is not part of React, it is a separate library, we can use this with other frontend frameworks also
Redux works with the data layer
other alternatives : Zustand
Redux offers easy debubbing

**Why REDUX TOOLKIT NOT REDUX?**

Configuration of Redux store is too complicated
Has to add lot of packages
Redux requires too much boilerplate code


RTK Store - a central place to store all the data in form a JS object which can be accesible to entire application
Slices - cart slice, user slice

{when we click add button it dispatches an action which calls a reducer function which updates the cart slice in RTK store}

{Our cart component in UI has to subscribe to the cart slice to read data from it by using a selector}

-> For reference check the Redux image

**STEPS**
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to the app
- create slice (cart slice)
- dispatch
- subscribe

If we don't subscribe to the correct portion of the store, then there is a huge loss in performance

In store, we have a "reducer" and it has multiple small "reducers"

In Slice, we have reducer functions called as "reducers"

