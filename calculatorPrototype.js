//calculator prototype
function Calculator(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
};

Calculator.prototype.addition = function () {
    return this.num1 + this.num2;    
};

Calculator.prototype.subtraction = function() {
    if (this.num1 < this.num2){
        console.log(`${this.num1} is less than ${this.num2}, you will get a negative result`);
        return this.num1 - this.num2; 
    }else{return this.num1 - this.num2; }    
};

Calculator.prototype.multiplication = function() {
    return this.num1 * this.num2; 
};

Calculator.prototype.division = function() {
    return this.num1 / this.num2; 
};

let calc = new Calculator(3, 6);
console.log (calc.addition());
console.log (calc.subtraction());
console.log (calc.multiplication());
console.log (calc.division());