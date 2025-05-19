var btn_circle = document.getElementById("btnC");
var btn_rectangle = document.getElementById("btnR");
var btn_triangle = document.getElementById("btnT");

var circle = document.getElementById("circle");
var rectangle = document.getElementById("rectangle");
var triangle = document.getElementById("triangle");

btn_circle.onclick=function(){
    circle.setAttribute("class", "shape_circle");
}
btn_rectangle.onclick=function(){
    rectangle.setAttribute("class", "shape_rectangle");
}
btn_triangle.onclick=function(){
    triangle.setAttribute("class", "shape_triangle");
}
circle.onclick=function(){
    circle.setAttribute("class", "hide");
}
rectangle.onclick=function(){
    rectangle.setAttribute("class", "hide");
}
triangle.onclick=function(){
    triangles.setAttribute("class", "hide");
}