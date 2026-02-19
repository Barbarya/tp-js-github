function fizzBuzz(n) {
    let str ;
    for (let i = 0 ; i <= n ; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            str = "FizzBuzz";
        } else if (i % 3 === 0){
            str = "Fizz";
        } else if (i % 5 === 0){
            str = "Buzz";
        } else {
            str = n;
        }

        console.log(`${str}`);
    }

}