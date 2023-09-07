function palindrome(str){
    let puncRegex=/(\W+)/g;
    let str1=str.replace(puncRegex,'');
    //the regex is used to remove all non-alphanumeric characters and replacing them with empty string
        let str2=str1.split('');//splits the string into an array and the ('')speech marks split by character
        let arr1=str2.reverse();//reverses the order of elements in the array
        let str3=arr1.join(''); //joins the array and again we use an empty string to show that it should join the words by character
       let str4=str3.toLowerCase()
       let str5=str1.toLowerCase()
        if(str4===str5){return true;}
        return false ; } 
console.log(str4,str5);
        palindrome('race Car')``