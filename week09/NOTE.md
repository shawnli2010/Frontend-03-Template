## Map Editor

1. Use mousemove to avoid clicking too many times on a large map
2. Call e.preventDefault during right click to prevent context menu from popping up
3. Use y * row number + x to map a one-dimensional array to a two-dimensional array

## Breadth First Search

1. In JS, array is a natural queue which can be used for BFS; it is also a natural stack which can be used for DFS; use the combination of the following 4 methods to make array behave like queue or stack
    1. shift() and push() ⇒ queue
    2. pop() and push() ⇒ stack
2. The frame of the code for different path searching algorithms should be the same, the difference should just be at the use of the data structure
    1. queue for BFS
    2. stack fo DFS
    3. something else for A*

## Use async/await to visualize BFS

1. sleep() function is really useful in making the code wait for certain amount of time in js in a sychronous fashion

```jsx
function sleep(t) {
        return new Promise(function (resolve) {
            setTimeout(resolve, t);
        })
    }
```

## Find Path

1. Pass the pre coordinate into insert()
2. Store the pre coordinate of the current coordinate in a table
3. After finding the end coordinate, trace back thru the pre coordinate using the table and push each coordinate into an array, and thus the array will store all the points along the path