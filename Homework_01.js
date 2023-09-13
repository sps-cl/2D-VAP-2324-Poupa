function calc(a, kod, b){
    let x;
    switch (kod){
        case "+":
            x = a + b;
            console.log(x);
            break;
        case "-":
            x = a - b;
            console.log(x);
            break;
        case "*":
            x = a * b;
            console.log(x);
            break;
        case "/":
            if (b === 0){
                console.log("error");
            } 
            else {
                x = a / b;
                console.log(x);
            }
            break;
            default:
                console.log("error")
    }
}