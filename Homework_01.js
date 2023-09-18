function calc(a, kod, b){
    switch (kod){
        case "+":
            console.log(a + b);
            break;
        case "-":
            console.log(a - b);
            break;
        case "*":
            console.log(a * b);
            break;
        case "/":
            if (b === 0){
                console.log("error");
            } 
            else {
                console.log(a / b);
            }
            break;
            default:
                console.log("error")
    }
}