import test from 'ava';
import {getByElementCount, getByIndexValue} from '../index.js';

const fibonacci_1 = getByElementCount(3);
test('TEST1 - getByElementCount should return 3 element (with zero) if the value "0, 1, 1, 2 " is passed', t => {
    t.deepEqual(fibonacci_1, [0, 1, 1, 2]);
});

const fibonacci_2 = getByElementCount('test');
test('TEST2 - getByElementCount should return " [] " if the value " [] " is passed', t => {
    t.deepEqual(fibonacci_2, []);
});

const fibonacci_3 = getByElementCount(0);
test('TEST3 - getByElementCount should return " 0 " if the value " 0 " is passed', t => {
    t.deepEqual(fibonacci_3, [0]);
});

const fibonacci_4 = getByElementCount(-1);
test('TEST4 - getByElementCount should return " 0 " if the value " 0 " is passed', t => {
    t.deepEqual(fibonacci_4, [0]);
});

const fibonacci_5 = getByElementCount(50);
test('TEST5 - getByElementCount should return 50 elemenet (with zero) if the lest value " 12586269025 " is passed', t => {
    t.deepEqual(fibonacci_5, [
        0
        ,1
        ,1
        ,2
        ,3
        ,5
        ,8
        ,13
        ,21
        ,34
        ,55
        ,89
        ,144
        ,233
        ,377
        ,610
        ,987
        ,1597
        ,2584
        ,4181
        ,6765
        ,10946
        ,17711
        ,28657
        ,46368
        ,75025
        ,121393
        ,196418
        ,317811
        ,514229
        ,832040
        ,1346269
        ,2178309
        ,3524578
        ,5702887
        ,9227465
        ,14930352
        ,24157817
        ,39088169
        ,63245986
        ,102334155
        ,165580141
        ,267914296
        ,433494437
        ,701408733
        ,1134903170
        ,1836311903
        ,2971215073
        ,4807526976
        ,7778742049
        ,12586269025]);
});

const fibonacci_6 = getByElementCount(51);
test('TEST6 - getByElementCount should return 50 elemenet (with zero) if the lest value " 12586269025 " is passed', t => {
    t.deepEqual(fibonacci_6, [
        0
        ,1
        ,1
        ,2
        ,3
        ,5
        ,8
        ,13
        ,21
        ,34
        ,55
        ,89
        ,144
        ,233
        ,377
        ,610
        ,987
        ,1597
        ,2584
        ,4181
        ,6765
        ,10946
        ,17711
        ,28657
        ,46368
        ,75025
        ,121393
        ,196418
        ,317811
        ,514229
        ,832040
        ,1346269
        ,2178309
        ,3524578
        ,5702887
        ,9227465
        ,14930352
        ,24157817
        ,39088169
        ,63245986
        ,102334155
        ,165580141
        ,267914296
        ,433494437
        ,701408733
        ,1134903170
        ,1836311903
        ,2971215073
        ,4807526976
        ,7778742049
        ,12586269025]);
});

const fibonacci_7 = getByElementCount(1000);
test('TEST7 - getByElementCount should return 50 elemenet (with zero) if the lest value " 12586269025 " is passed', t => {
    t.deepEqual(fibonacci_7, [
        0
        ,1
        ,1
        ,2
        ,3
        ,5
        ,8
        ,13
        ,21
        ,34
        ,55
        ,89
        ,144
        ,233
        ,377
        ,610
        ,987
        ,1597
        ,2584
        ,4181
        ,6765
        ,10946
        ,17711
        ,28657
        ,46368
        ,75025
        ,121393
        ,196418
        ,317811
        ,514229
        ,832040
        ,1346269
        ,2178309
        ,3524578
        ,5702887
        ,9227465
        ,14930352
        ,24157817
        ,39088169
        ,63245986
        ,102334155
        ,165580141
        ,267914296
        ,433494437
        ,701408733
        ,1134903170
        ,1836311903
        ,2971215073
        ,4807526976
        ,7778742049
        ,12586269025]);
});

const fibonacci_8 = getByIndexValue(3);
test('TEST8 - getByIndexValue should return last 3 index value if the value " 2 " is passed', t => {
    t.is(fibonacci_8, 2);
});

const fibonacci_9 = getByIndexValue('test');
test('TEST9 - getByIndexValue should return " 0 " if the value " 0 " is passed', t => {
    t.is(fibonacci_9, 0);
});

const fibonacci_10 = getByIndexValue(0);
test('TEST10 - getByIndexValue should return " 0 " if the value " 0 " is passed', t => {
    t.is(fibonacci_10, 0);
});

const fibonacci_11 = getByIndexValue(-1);
test('TEST11 - getByIndexValue should return " 0 " if the value " 0 " is passed', t => {
    t.is(fibonacci_11, 0);
});

const fibonacci_12 = getByIndexValue(50);
test('TEST12 - getByIndexValue should return last 50 index value if the value " 12586269025 " is passed', t => {
    t.is(fibonacci_12, 12586269025);
});

const fibonacci_13 = getByIndexValue(51);
test('TEST13 - getByIndexValue should return last 50 index value if the value " 12586269025 " is passed', t => {
    t.is(fibonacci_13, 12586269025);
});

const fibonacci_14 = getByIndexValue(1000);
test('TEST14 - getByIndexValue should return last 50 index value if the value " 12586269025 " is passed', t => {
    t.is(fibonacci_14, 12586269025);
});