let charAt = "Hello".charAt(4)                               // o
let concat = "Hello".concat("","World")                      // Hello World
let startsWith = "Hello".startsWith("H")                     // true
let endsWith = "Hello".endsWith("O")                         // true
let includes = "Hello".includes("x")                         // false
let indexOf = "Hello".indexOf("l")                           // 2
let lastIndexOf = "Hello".lastIndexOf("l")                   // 3
let match = "Hello".match(/[A-Z]/g)                          // [ 'H' ]
let padStart = "Hello".padStart(6,"?")                       // ?Hello
let padEnd = "Hello".padEnd(6,"?")                           // Hello?
let repeat = "Hello".repeat(3)                               // HelloHelloHello
let replace = "Hello".replace("llo","y")                     // Hey
let search = "Hello".search("e")                             // 1
let slice = "Hello".slice(1,3)                               // el
let split = "Hello".split("")                                // [ 'H', 'e', 'l', 'l', 'o' ]
let substring = "Hello".substring(2,4)                       // ll
let toLowerCase = "Hello".toLowerCase()                      // hello
let toUpperCase = "Hello".toUpperCase()                      // HELLO
let trim = " Hello ".trim()                                  // Hello
let trimStart = " Hello ".trimStart()                        // Hello "
let trimEnd = " Hello ".trimEnd()                            // " Hello

console.log({ 
    charAt,
    concat,
    startsWith,
    endsWith,
    includes,
    indexOf,
    lastIndexOf,
    match,
    padStart,
    padEnd,
    repeat,
    replace,
    search,
    slice,
    split,
    substring,
    toLowerCase,
    toUpperCase,
    trim,
    trimStart,
    trimEnd
});