function validate()
{
var pattern=/[1-4][A-Z][A-Z][0-9][0-9][A-z][A-Z][0-9][0-9][0-9]$/;
usn = document.getElementById('usn');
if( !usn.value.match(pattern))
alert("Invalid USN");
else
alert("Valid USN");
}