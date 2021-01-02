import test from 'ava';
import fibonacciByElementCount from '../index.js';

const fibonacci_1 = new fibonacciByElementCount(3);
console.log(fibonacci_1)

test('fibonacciByElementCount should return "0, 1, 1 " if the value "0, 1, 1 " is passed', t => {
    t.deepEqual(fibonacci_1, [0, 1, 1]);
});