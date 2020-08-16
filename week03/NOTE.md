# From HTML Text to DOM Tree

## Setup

1. To manage the files, we put the code that converts the response html to DOM tree into another file (parser.js)
2. the parser.parseHTML(html) API is designed to take the HTML text as the input, and return a DOM Tree as the output
3. We use Finite State Machine(FSM) to parse the HTML Text; It is convenient and natural to do that because the HTML Standard is already written as a FSM in the pseudo code style; We can literarily just translate the pseudo code into actual code

## FSM

1. While starting to implement the skeleton of the FSM for the html parser, we should keep in mind that there are 3 type of html tags:
    1. start tag, like <body>
    2. end tag, like </body>
    3. self-closing tag, like <input/> or <input>, in the FSM we implemented in class we always assume there is a slash before the ">" for self-closing tag
2. Besides state transition, we would also add business logic in each state to do things like
    1. Create, update and emit token
3. Either for parsing the tag or parsing the attributes, we follow the steps as following
    1. Declare a global variable (currentToken, currentAttribute)
    2. Keep appending character to the global variable to construct the tag or attribute
    3. When it reaches a sign of ending of the current parsing part (like when it sees a ">" while dealing with tag, or a "=" while dealing with attribute name, etc), we should wrap up the current data(either attach the attributeName → attributeValue pair to currentToken, or emit currentToken) and transition to the next state 

## Build DOM Tree with Tokens

1. Use a stack to convert a stream of tokens to a tree of tokens, algorithm is as the following
    1. When there is a startTagToken(or start of string?), we push the token into the stack
    2. And we make the current coming token to be the child of the current top element of the stack
    3. And we pop the token out when we see a corresponding endToken
    4. Self-closing element will not be pushed into the stack, will only be built with the parent-child relationship with the top element of stack

## Process CSS

1. Use an exsiting npm package to parse the textNode.content of style tag element; Assume style tag only contains pure text of standard css rules
2. While computing css, we need to know all the parent elements of the current element in order to check whether the selector can target the current element; That is why we need to get all the elements in the stack cuz the stack contains all the parents of the current element; And we always start from the current element(the inner most one) and go outwards to the ancestor element; The reason is that we know for sure that for a parent or ancestor selector, the last part of the selector must match the current element we are parsing. For example

    ```css
    div div #myid {
      // attributes
    }
    ```

    We don't know which parent divs will the first two div in the selector match; But we know for sure that #myid must match the current element.