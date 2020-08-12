const EOF = Symbol("EOF"); //EOF: End of File

function data(c) {
    if (c === "<") {
        return tagOpen;
    } else if (c === EOF) {
        return ;
    } else {
        return data;
    }
}

function tagOpen(c) {
    if (c === "/") {
        return endTagOpen;
    } else if (c.match(/^[a-zA-Z]$/)) {
        return tagName(c);
    } else {
        return ;
    }
}

function endTagOpen(c) {
    if (c.match(/^[a-zA-Z]$/)) {
        return tagName(c);
    } else if (c === ">") {
        
    } else if (c === EOF) {
        
    } else {

    }
}

function tagName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName;
    } else if (c === "/") { // it's a selfClosingTag like <br/>, but it seems like either <br> or <br/> is considered as self-clsoing tag
        return selfClosingStartTag;
    } else if (c.match(/^[a-zA-Z]$/)) { // this character is still part of the tagName
        return tagName; // continue consuming the next tagName character
    } else if (c === ">") { // it's a start tag
        return data;
    } else {
        return tagName;
    }
}

function beforeAttributeName(c) { // we eat up all the characters except for ">"
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName;
    } else if (c === ">") {
        return data;
    } else if (c === "=") {
        return beforeAttributeName;
    } else {
        return beforeAttributeName;
    }
}

function selfClosingStartTag(c) {
    if (c === ">") {
        currentToken.isSelfClosing = true;
        return data;
    } else if (c === "EOF") {

    } else {

    }
}

module.exports.parseHTML = function parseHTML(html) {
    let state = data;
    for (let c of html) {
        state = state(c);
    }
    state = state(EOF);
}