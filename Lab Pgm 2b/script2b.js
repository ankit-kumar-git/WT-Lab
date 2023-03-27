function sqr()
{
var n = prompt("Enter N: ","");
msgstr ="The square of numbers from 1 to "+n +" is: \n";
for(i=1;i<=n;i++)
{
msgstr = msgstr +i +"------->" +i*i +"\n";
}
alert(msgstr);
}