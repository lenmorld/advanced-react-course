SearchBar

* good thing to use `componentWillUpdate` to determine when component re-renders
other than using React dev tools update highlights

```
    componentWillUpdate() {
        console.log('Updating search bar');
    }
```



===

always re-renders

![](screens/2019-04-24-21-21-43.png)


why?

SearchBar is being updated every time

![](screens/2019-04-24-21-23-34.png)

state changes every second