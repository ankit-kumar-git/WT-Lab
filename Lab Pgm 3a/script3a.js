function vowel(){
    var str=prompt("Enter a string:");
    var n=str.length;
    var flag=0;
    for(let i=0;i<n;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            alert("The left most vowel is present in the position:"+(i+1));
            flag=1;
            break;
        }
    }
    if(flag==0){
        alert("No Vowels found.");
    }
}