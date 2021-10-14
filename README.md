JSX Rules
 - Return single element
 - div / section / article or Fragment
 - use camelCase for html attributes
 - className instead of class
 - close every element
 - formatting
 - Component name must be in uppercase
 - must be in the function/component body
 - cannot call conditionally

UseRef
 - preserve values
 - Doesn't trigger re-render
 - target dom nodes/elements

UseState
 - trigger re-renders
 - store state hooks
 - [variable, f()]

UseEffect
 - runs every time if dependencies or condition not provided on renders/re-renders
 - trigger render
 - can add dependencies if there is change in dependencies re-renders page
 - can add conditions also

UseReducer
 - const [state,dispatch] = useReducer(reducer,defaultState)
 - requires a reducer function and default state (default state can be a object)
 - reducer function consists of state and action
 - can be invoked using dispatch({type:'ACTION_TYPE'})

Context API
 - const PersonContext = React.createContext()
 - wrap the component jsx elements in Provider as in next line
 - <PersonContext.Provider value={{ removePerson }}> JSX elements <PersonContext.Provider>
 - const { removePerson } = useContext(PersonContext)
 - The context is accessible anywhere in the components by invoking useContext

Custom Hooks
 - Regular functions can't be imported in react
 - It needs to be either react component or function prefix with use (example- useFetch)

PropTypes
 - import PropTypes from 'prop-types'
 - we can set fields which is required so that we get warning if wrong set of fields or
   data is sended back
 - we can set default props for the data if some fields are not available

React Routers
 - BrowserRouter is the wrapper element in which all routes are wrapped
 - Route is used to call components if matched route is called
 - Switch is used to call routes single time in order they are written
 - path="*" is called wild card route which matches for every route

Fragment
 - It allows you to wrap elements without extra div / sections.
 - Short hand <></> or Full syntax <React.Fragment></React.Fragment>

Nested Components
 - Always use First letter Capital for react component function namings

React Tools
 - React tools chrome extension

Spread operators
 - <Book key={book.id} author={book.author} title={book.title} img={book.img}/> == <Book key={book.id} {...book}/> where book = {id:1,title:'some title',author: 'author name', img='img link'}

Passing Childrens in Components
 - <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} >
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </Book>
