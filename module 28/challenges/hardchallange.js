var btn_circle = document.getElementById("btnC");
var btn_rect = document.getElementById("btnR");
var btn_triangle = document.getElementById("btnT");

var circle=document.getElementById("circle");
var rect=document.getElementById("rect");
var triangle=document.getElementById("triangle");

btn_circle.onclick=function() {
    circle.setAttribute("class","shape_circle");
}
btn_rect.onclick=function(){
btn_triangle.setAttribute("class","shape_rect");
}
btn_triangle.onclick=function(){
    btn_triangle.setAttribute("class","shape_triangle");
    }
    circle.onclick =function (){
        circle.setAttribute("class","hide");
    }
    rect.onclick =function (){
        rect.setAttribute("class","hide");
    }
    triangle.onclick =function (){
        triangle.setAttribute("class","hide");
    }
    