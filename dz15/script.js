function sum(param) {
    let res = 0;

    sum = (param) => {
        return res += param;
    }

    return sum(param);
}

console.log(sum(3), sum(20))