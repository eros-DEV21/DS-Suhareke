/*function printNames(){
    document.write('Jhon');
    document.write('<br');
setTimeout(function () { document.write('Ana'); }, 3000);
    document.write('Bob');
    
}

printNames();*/

var colors=['red','green','blue','purple'];

function changeBgColor(){
        document.querySelector('body').style.background=
        colors[Math.floor(Math.random()*colors.length)];
    }

    var names =['Jhon', 'Ana','Bob', 'Mark'];

    function changeNames(){
        document.querySelector('body').style.background=
        colors[Math.floor(Math.random()*names.length)];
}

setInterval(changeBgColor, 1000);
setInterval(changeNames, 1000);