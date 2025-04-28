function checkPalindromes(words) {
    for(var i=0; i<words.length; i++){
        if(words [i] === words[i].split('').reverse().koin('')){
        console.log("YES");    
        }
        {
    console.log("NO")
        }        
    }
}
checkPalindromes(["kimik","level","module"])