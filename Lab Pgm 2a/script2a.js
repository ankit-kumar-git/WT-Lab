function fib() {
    document.write("<h1>" +"Fibonacci Series..." +"\n</h1>");
    var n = prompt("Enter N: ","");
    fib1=0;
    fib2=1;
    fib=0;
    document.write("<h2>" +fib1 +"\n</h2>");
    document.write("<h2>" +fib2 +"\n</h2>");
    for(i=0;i<n;i++) {
    fib = fib1+fib2;
    fib1=fib2;
    fib2=fib;
    document.write("<h2>" +fib +"\n</h2>");
    }
}