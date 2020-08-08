## Design Request class

### Structure

1. **Content-Type** is a must-have field, it needs a default value, common values are like:
    - application/x-www-form-urlencoded
    - application/json
2. body will be a key-value pair object
3. different **Content-Type** will decide different format of bodyText

### Send Request And Handle Response

1. The send request api needs to be designed to optionally take in a TCP connection and send the data using the existing connection; otherwise a it will create a new TCP connection
2. After receiving the response data(the string) from the connection, we can throw the whole string into the response parser, and resolve the promise when the parser status is finished 

## Design Response Parser

1. The response returned from the server will always be a string. And the string will follow a strict format in the order of different blocks:
    1. **status line**
        - http version
        - status code
        - status string
    2. **headers**, same as the request's headers, which is a key-value pair
    3. **body**, format depends on content type, the one discussed in class is called chunked body
2. We can implement the response parser using state machine, and we can write separate sub-parser(separate state machine) to parse different parts of the response. Like in the class we wrote two different state machines for headers and body. And we may also write different state machines to parser different types/formats of body depending on the Content-Type