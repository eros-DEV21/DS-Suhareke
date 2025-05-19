var programminglanguages=['JavaScript','PHP','Python'];

console.log(programminglanguages);


console.log(programminglanguages[0]);


programminglanguages.push('java');


console.log(programminglanguages);


programminglanguages.pop('java');


console.log(programminglanguages);


programminglanguages.shift();


console.log(programminglanguages);


programminglanguages.unshift('c++');

 
console.log(programminglanguages);


programminglanguages.splice(0,2,'HTML');


console.log(programminglanguages);


console.log(Math.random()*5);


console.log(Math.floor(Math.random()*5));

var students=["John","Doe"]


var [s1,s2]=students;


console.log(s1);


console.log(s2);


var places =["London","Paris","New York","Berlin"]

var[FirstPlace, ,secondPlace] = places

console.log(secondPlace)


var numbers = [1,2,3,4,5,6,7,8,9,10];


var[first,second, ...otherNumbers]= numbers;


console.log(first);


console.log(second);


console.log(otherNumbers.toString());