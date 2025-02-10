*Monolithic* (Single Tech Stack) Monolithic is like a single, big block where everything is built together, making it easier at first but harder to scale and maintain as it grows.

Frontend: React
Backend: Node.js with Express (or Django, Spring, etc.)
Database: PostgreSQL (one database for everything)
Deployment: Single Docker container or a single cloud instance

*Microservices* (Multiple Tech Stacks) Microservices are like multiple small, independent houses that each handle a specific task. They are easier to scale and maintain but require more effort to manage, especially when it comes to communication and deployment.

Frontend: React
Backend:
Authentication Service: Node.js with JWT
Product Service: Java with Spring Boot
Order Service: Python with Flask
Payment Service: Go or Node.js
Databases: Multiple databases (PostgreSQL, MongoDB, Redis)
Deployment: Each microservice deployed separately, typically in Docker containers managed by Kubernetes

*Micro Frontends (MFE)* is a way of breaking down a large frontend app into smaller, independently deployable pieces (like microservices but for the frontend). This makes it easier to manage, scale, and develop the app over time.

Imagine you have a big website or web app, like an e-commerce store. Instead of building the entire website as one huge codebase, you break it down into smaller parts (micro frontends), like:

Product listing page
Shopping cart
User profile
Search bar


Page Loads --> API call --> Render

Page Loads --> Render (SHIMMER UI) --> API --> Render  (for better UX) - we will use this in React

**USE EFFECT HOOK**

useEffect(()=>{}, []);     
two arguments -> call back fn , depedency array

useEffect will be called after the component complete it's rendering

*SHIMMER UI* is a dummy represnation og the page layout which helps us until our fetches the data from API, for better UX

Rendering based on conditions is called "Conditional Rendering"

=> If we use normal JS variables, and we update the variable then UI won't change, but if we log that variable in console it will change, so for updating UI we have to use state variables in React 

*Whenever a state variable changes/updates, it rerenders that component*

