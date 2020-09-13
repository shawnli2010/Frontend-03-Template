## Browser API

- DOM API
  - Node: Manipulatet DOM Tree
  - Event: Trigger and listen to events
  - Range: Manipulate a range of elements
  - traversal
- CSSOM

#### Node navigation
- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling

#### Element navigation
- parentElement
- children
- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling

#### Manipulate DOM Tree
- appendChild
- insertBefore
- removeChild
- replaceChild

#### Other Convenient API
- compareDocumentPosition
- contains 
- isEqualNode 
- isSameNode (can be replaced by "===")
- cloneNode 

### Event

#### Bubble and Capture
- Events first are captured down to deepest target, then bubble up. In IE<9 they only bubble.
- All handlers work on bubbling stage excepts addEventListener with last argument true, which is the only way to catch the event on capturing stage.
- Bubbling/capturing can be stopped by event.cancelBubble=true (IE) or event.stopPropagation() for other browsers.

### CSSOM

#### window
- window.innerHeight, window.innerWidth：viewport可视范围的尺寸
- window.outerWidth, window.outerHeight：整个浏览器窗体尺寸
- window.devicePixelRatio：CSS像素和屏幕物理像素比率
- window.screen：屏幕信息
  - window.screen.width
  - window.screen.height
  - window.screen.availWidth
  - window.screen.availHeight
  - ...

#### Window API
`var opened = window.open("about:blank", "_blank" ,"width=100,height=100,left=100,right=100" )`

- moveTo(x, y)
- moveBy(x, y)
- resizeTo(x, y)
- resizeBy(x, y)

#### scroll

- scrollTop
- scrollLeft
- scrollWidth
- scrollHeight
- scroll(x, y) or scrollTo(x, y)
- scrollBy(x, y)
- scrollIntoView()
- window
  - scrollY
  - scroll(x, y)
  - scrollBy(x, y)

#### layout

- getClientRects()
- getBoundingClientRect()
