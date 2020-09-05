## Box model

1. a box has 4 layers:
    1. margin: distance outside of the box; distance between boxes
    2. border: length of the border of the box
    3. padding: distance between the border and the content
    4. content: actual content of the box
2. box-sizing
    1. default value is **content-box**, which means that the width and height attribute will determine the width and height of the content box. Therefore, the actual (width or height) of the box would be equal to (width or height) + padding + border
    2. another useful value is **border-box**, which means that width and height attribute will determine the width and height of the whole box. Therefore actual (width or height) of the box would be equal to the (width or height) attribute, and the (width or height) of the content-box would be equal to (width or height) - padding - border

## Normal flow

1. float
    1. Will squeeze the box thru the text to the left or right until it meets another float box
    2. It will not automatically change line to make sure it can hit the left or right border, it will stack upon some other float box if there is one
    3. If you want to force the float box to change to a new line, you can use the **clear** attribute with an opposite value than the float.
2. margin collapse
    1. The reason that it will collapse can be explained by margin means how much white space are there around the element
    2. **margin collapse only happened within the same BFC (vertically?), not in IFC (horizontally?) or between different BFC (TO UNDERSTAND)**