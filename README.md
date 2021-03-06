# fibonum-array
[![Build Status](https://travis-ci.org/takafumikobayashi/fibonum-array.svg?branch=master)](https://travis-ci.org/takafumikobayashi/fibonum-array) [![Maintainability](https://api.codeclimate.com/v1/badges/27e0cc550dec845b252b/maintainability)](https://codeclimate.com/github/takafumikobayashi/fibonum-array/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/27e0cc550dec845b252b/test_coverage)](https://codeclimate.com/github/takafumikobayashi/fibonum-array/test_coverage)

## Installation

~~~sh
npm install --save fibonum-array
~~~


## Usage

### This library provide two methods.

~~~js
import { getByElementCount, getByIndexValue } from 'fibonum-array'

let array = getByElementCount( params );  // Get Fibonacci Number As many elements as you specify
let number = getByIndexValue( params );  // Get Fibonacci Number As Index number you specified
~~~


### Example:
~~~js
import { getByElementCount, getByIndexValue} from 'fibonum-array'
~~~

Get Fibonacci Number Array
~~~js
let array = new Array
array = getByElementCount(5);
console.log(array);
~~~
reult:
~~~js
[0, 1, 1, 2, 3, 5]
~~~

Get Fibonacci Number you specified
~~~js
let number = new Number
number = getByIndexValue(50);
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