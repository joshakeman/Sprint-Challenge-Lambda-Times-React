1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes specify what the incoming props should look like, including structure (ie whether the data coming in is an object/array/etc) and data types (whether a property is a string, number, function etc). Type checking is done to ensure that there is nothing wrong with the incoming data so that, if we do have a problem with our app, we can know that is not the cause.

2. Describe a life-cycle event in React?

ComponentDidMount allows the app to render prior to setting state. This is useful for apps where data is being pulled in remotely and we expect some latency. We don't want to wait to render anything to the screen before that data has arrived, so we use componentDidMount.


3. Explain the details of a Higher Order Component?

A higher order component is a function that takes in a component and returns another component. It allows for re-usable logic that can be used with various components. It can add functionality to the component being taken in or used to conditionally render components.

4. What are three different ways to style components in React? Explain some of the benefits of each.

We can use standard CSS, styled-components, or reactstrap. The latter two allow you to write your styles in javascript rather than CSS. Some developers prefer this, and it allows for re-usable styles similar to the way we use components. Both Reactstrap and styled-components are useful because they have pre-built components you can plugin and customize. With styled-components you can pass props to customize your styled components.