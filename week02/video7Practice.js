// practice 1: match abcabx
// function match1(s) {
//     let state = start;
//     for (let c of s) {
//         state = state(c);
//     }
//     return state === end;
// }

// function start(char) {
//     if (char === 'a') {
//         return founda;
//     } else {
//         return start(char);
//     }
// }

// function founda(char) {
//     if (char === 'b') {
//         return foundb;
//     } else {
//         return start(char);
//     }
// }

// function foundb(char) {
//     if (char === 'c') {
//         return foundc;
//     } else {
//         return start(char);
//     }
// }

// function foundc(char) {
//     if (char === 'a') {
//         return founda2;
//     } else {
//         return start(char);
//     }
// }

// function founda2(char) {
//     if (char === 'b') {
//         return foundb2;
//     } else {
//         return start(char);
//     }
// }

// function foundb2(char) {
//     if (char === 'x') {
//         return end;
//     } else {
//         return foundb(char);
//     }
// }

// function end(char) {
//     return end;
// }

// console.log(match1('ababcabxsdf'))

// practice 2: match abababx
function match2(s) {
    let state = start;
    for (let c of s) {
        state = state(c);
    }
    return state === end;
}

function start(char) {
    if (char === 'a') {
        return founda1;
    } else {
        return start;
    }
}

function founda1(char) {
    if (char === 'b') {
        return foundb1;
    } else {
        return start(char);
    }
}

function foundb1(char) {
    if (char === 'a') {
        return founda2;
    } else {
        return start(char);
    }
}


function founda2(char) {
    if (char === 'b') {
        return foundb2;
    } else {
        return start(char);
    }
}

function foundb2(char) {
    if (char === 'a') {
        return founda3;
    } else {
        return start(char);
    }
}

function founda3(char) {
    if (char === 'b') {
        return foundb3;
    } else {
        return start(char);
    }
}

function foundb3(char) {
    if (char === 'x') {
        return end;
    } else {
        return foundb2(char);
    }
}

function end(char) {
    return end;
}

console.log(match2('abfaabababababxasdf'))