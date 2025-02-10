**CLASS BASED COMPONENTS**

older way of creating components

class based component is a normal JS class which extends from React.Component and there in a render method inside it which returns JSX

we will recieve props in class based component in a constructor 

constructor(props) {
    super(props);
}

this.state = {
  // state variables
  count:0,
  ______ ,
}

*!! never update state variables directly !!*

this.setState({
    count : this.state.count + 1,
    ___________________________ ,
}) 

Order in class based components in a parent & child :-

Parent Constructor 
Parent Render
Child Constructor
Child Render
Child Component Did Mount
Parent Component Did Mount

first constructor will be called after it completed then render will be called after that component did mount will be called , now the entire component is completed

 "componentDidMount is used to make API calls because the component first renders, and then the API call is made. This ensures that data is fetched after the initial render. It is similar to useEffect in functional components when used with an empty dependency array (useEffect(() => { ... }, []))."

Order in class based components if there is multiple children

Parent Constructor 
Parent Render
Child 1 Constructor 
Child 1 Render
Child 2 Constructor 
Child 2 Render
Child 1 Component Did Mount
child 2 Component Did Mount
Parent Component Did Mount

two phases in life cycle:

Render Phase : Constructor and Render
Commit Phase : React updates DOM and COmponent Did Mount

if there are multiple children first render phase will grouped and completed and then react will group the commit phase and will complete it, it will do like this due to optimization

**IMP**
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


MOUNTING :
  constructor (dummy state)
  render (dummy data)
    <HTML Dummy>
  component did mount 
    API call
    set State

UPDATING :
    render (API data)
      <HTML (new API data)>
    component did update

UNMOUNTING :
    component will unmount (if we move from the component)
     


NEVER COMPARE LIFE CYCLE COMPONENTS WITH FUNCTIONAL COMPONENTS