var p1 = document.querySelector("#p1")
var p2 = document.querySelector("#p2")
var s1 = document.querySelector("#s1")
var s2 = document.querySelector("#s2")

var score1 = 0;
var score2 =0
p1.addEventListener("click",function(){
 	score1 = score1 + 1
 	s1.textContent = score1
})
p2.addEventListener("click",function(){
	score2 = score2 + 1
 	s2.textContent = score2
})