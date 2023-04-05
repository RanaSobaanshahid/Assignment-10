function Calculate(r) {
    this.r = r;
    this.perimeter = function () {
       return 2*Math.PI*this.r;
    };

    this.area = function () {
       return Math.PI * this.r * this.r;
    };
 }
 
 var calc = new Calculate(5);
 
 document.write("Area of Circle = ", calc.area().toFixed(2));
 document.write("<br>Perimeter of Circle = ", calc.perimeter().toFixed(2));