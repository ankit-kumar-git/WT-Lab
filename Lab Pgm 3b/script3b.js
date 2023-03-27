function revDigits()
{
var n = prompt("Enter a number: ","");
var str=0;
for(i=n.length-1;i>=0;i--)
str = str*10 + Number(n[i]);
alert(str);
}