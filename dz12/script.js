function pow(num, degree) {
    if (degree == 1) {
      return num;
    } else {
      return num * pow(num, degree - 1);
    }
}

console.log(pow(2, 3));
console.log(pow(4, 3));