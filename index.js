function fibonacciByElementCount(cnt) {
    let fibonacci = new Array;
    let before_number2 = 0
    let before_number1 = 0
    for (let i = 0 ; i < Number(cnt) ; i++) {
        if (i === 0) {
            fibonacci.push(i);
        } else if (i === 1) {
            fibonacci.push(i);
            before_number2 = before_number1; 
            before_number1 = i;
        } else {
            let n = before_number2 + before_number1;
            fibonacci.push(n);
            before_number2 = before_number1; 
            before_number1 = n;
        };
    }
    return fibonacci
}
export default fibonacciByElementCount;