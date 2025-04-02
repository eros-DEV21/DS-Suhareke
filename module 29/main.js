var programmingLaguages=['JavaScript','PHP','Python'];

console.log(programmingLaguages);

console.log(programmingLaguages[0]);

programmingLaguages.push('Java');

console.log(programmingLaguages);

programmingLaguages.pop('Java');

console.log(programmingLaguages);

programmingLaguages.shift();

console.log(programmingLaguages);

programmingLaguages.unshift('c++');

console.log(programmingLaguages);

programmingLaguages.splice(0,2,'HTML');
console.log(programmingLaguages);

console.log(Math.random()*5);

console.log(Math.floor(Math.random()*5));


var students =["John","doe"]

var [s1,s2]=students;

console.log(s1);
console.log(s2);


var places =["London","Paris","New York","Berlin"]

var [firstplace, ,secondPlace] = places;

console.log(secondPlace);

var numbers = [1,2,3,4,5,6,7,8,9,10]
var [first,second, ...otherNumbers]= numbers;
console.log(first);
console.log(second);
console.log(otherNumbers.toString());