function getperc() {

let name = prompt("enter your name")
let std_TotalMarks_grade12 = document.getElementById("tm1").value;
let std_obtMarks_grade12 = document.getElementById("obt1").value;


let res = (std_obtMarks_grade12 / std_TotalMarks_grade12) * 100
let  (res ==( "85% - 89%"))
    console.log("grade A Excellent")


document.getElementById("change").innerHTML=(`Dear ${name} you have got  ${res}%` );

alert(`you have got  ${res}%`)


}





