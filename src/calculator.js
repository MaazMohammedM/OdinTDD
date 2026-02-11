export const calcuator = {
    add(a,b) {
        return a+b;
    },
    subtract(a,b){
        return a-b;
    },
    multiply(a,b){
        return a*b;
    },
    divide(a,b){
        if(a === 0) return "Cannot divide by zero."
        return b/a;
    }
}