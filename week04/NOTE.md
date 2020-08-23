## Layout

1. Implement flex. We pre-assign the same set of variables before we start calculating the layout to accommondate different situations caused by flex-direction, which will make the code a lot easier
2. Need to decide which set of elements can participate in the equal weight scale
3. Process the element one by one; push them into the flexLine; and depending on the wrap setting, switch to a new line when the space is not enough

## Calculation for main axis

1. Find all the flex items
2. Distribute the remaining space to the flex items with respect to the weight of each item
3. If there are no more remaining space, then we need to squeeze the remaining space with respect to the ratio of the weight of each item

## Calculation for cross axis

1. Calculate based on the highest element in the row
2. Only calculate based on flex-align and item-align

## Render

1. Need to use a third-party rendering library to render the dom
2. the npm images package can only do simple things like color, background-color, border etc. for more complex stuff like gradient, need to use webGL
3. Need to recursively call render on each element to render the entire DOM tree