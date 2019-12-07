- [ ] Why would you use class component over function components (removing hooks from the question)?

    Because in the past, it solved many problems, and on a vary large scale. So it may be more cost-effective to continue writing with class components rather than spend man-hours and money on converting to functional components

- [ ] Name three lifecycle methods and their purposes.

    1. render - dictates what will be rendered(shown) on the screen
    2. componentDidMount - Forces a re-render when we call setState. Actions performed here are similar to what we would use in useEffect when using hooks
    3. componentDidUpdate - This is the cleanup phase for event listeners

- [ ] What is the purpose of a custom hook?

    They allow us to create DRY code by enabling us to re-use non-visual components (such as event listeners) that are used in multiple places throughout our app. 

- [ ] Why is it important to test our apps?

    Because it reduces the amount of errors (by both user and developer) that can show up later. It can also function as a form of documentation, because the tests make it clear what a component is supposed to do (which means a new developer will know if they broke anything when looking at new code)