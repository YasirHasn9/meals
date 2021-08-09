##HOC
Higher order component
They are pattern we are using when we repeat ourselves many times

what they are ?
They are function take a component and return new component
```js
function HOC(Component){
    // here some logic 
    return () => {
        return  <Component />
    }
}
```

<ul>
<li>They are pure function which means they shouldn't change  the state</li>
<li>they should be in the render method</li>
</ul>