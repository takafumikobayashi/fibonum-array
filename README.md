# fibonum-array

## Installation

~~~sh
npm install --save fibonum-array
~~~


## Usage

### This library provide two methods.

~~~js
let fibonum = require('fibonum-array')

let array = fibomun.getByElementCount( params );  // Get Fibonacci Number As many elements as you specify
let number = fibomun.getByIndexvalue( params );  // Get Fibonacci Number As Index number you specified
~~~


### Example:
~~~js
let fibonum = require('fibonum-array')
~~~

Get Fibonacci Number Array
~~~js
let array = new Array
array = fibonum.getByElementCount(5);
console.log(array);
~~~
reult:
~~~js
[0, 1, 1, 2, 3, 5]
~~~

Get Fibonacci Number you specified
~~~js
let number = new Number
number = fibonum.getByIndexValue(50);
console.log(number);
~~~
reult:
~~~js
12586269025
~~~

## License
MIT

## Keywords

fibonacci
fibonum